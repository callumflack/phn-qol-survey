var React = require("react");
var Nav = require("../ui-Nav/Nav.js");
var AdminForm = require("./AdminForm.js");
var DownloadButtons = require("./DownloadButtons.js");
var LogOutModal = require("./LogOutModal.js");
var IcAvatar = require('../ui-Elements/Icons.js').IcAvatar;
var IcDownload = require('../ui-Elements/Icons.js').IcDownload;

require('./../../stylesheets/app.scss');

// Production
// var ADMIN_LOGIN_URL = "https://phn-qol-survey.herokuapp.com/admin/login";
// var ADMIN_DOWNLOAD_URL = "https://phn-qol-survey.herokuapp.com/admin/download";

// Staging
var ADMIN_LOGIN_URL = "https://phn-qol-survey-staging.herokuapp.com/admin/login";
var ADMIN_DOWNLOAD_URL = "https://phn-qol-survey-staging.herokuapp.com/admin/download";

// Development
// var ADMIN_LOGIN_URL = "https://phn-qol-survey-development.herokuapp.com/admin/login";
// var ADMIN_DOWNLOAD_URL = "https://phn-qol-survey-development.herokuapp.com/admin/download";

// Local development
// var ADMIN_LOGIN_URL = "http://localhost:3000/admin/login";
// var ADMIN_DOWNLOAD_URL = "http://localhost:3000/admin/download";

var ADMIN_TIMEOUT = 1000*60*5;

var Admin = React.createClass({
	getInitialState: function() {
		var adminLogon = localStorage.getItem('adminLogon'),
			adminToken = localStorage.getItem('adminToken'),
			loggedIn = false;

		if (adminLogon)
			adminLogon = parseInt(adminLogon);
		if ( ! isNaN(adminLogon))
			loggedIn = adminLogon + ADMIN_TIMEOUT > Date.now();

		loggedIn = loggedIn && adminToken !== undefined;

		return {
			loggedIn: loggedIn,
			logoutOpen: false,
			loginPending: false,
			downloadPending: false
		};
	},
	logoutClick: function() {
		this.setState({ logoutOpen: true });
	},
	logoutClose: function() {
		this.setState({ logoutOpen: false });
	},
	logout: function() {
		localStorage.removeItem('adminToken');
		localStorage.removeItem('adminLogon');
		this.setState({
			loggedIn: false,
			logoutOpen: false,
			loginPending: false
		});
	},
	sendLogin: function(username, password, callback) {
		var submissionId = this.props.submissionId,
			headers = new Headers(),
			admin = this;

		headers.set('Content-Type', 'application/json');
		headers.set('Accept', 'application/json');

		this.setState({
			loggedIn: false,
			logoutOpen: false,
			loginPending: true
		});

		return fetch(
			ADMIN_LOGIN_URL,
			{
				method: "POST",
				mode: "cors",
				headers: headers,
				body: JSON.stringify({
					username: username,
					password: password
				})
			})
			.then((response) => response.json())
			.then(storeAdminToken)
			.catch((err) => {
				console.error(err);
				console.error("Error sending submission!");
				callback(err);
				admin.setState({
					loggedIn: false,
					loginPending: false
				});
			});

			function storeAdminToken(response) {
				if (response.errors) {
					callback(response.errors);
					admin.setState({
						loggedIn: false,
						loginPending: false
					});
					return;
				}
				localStorage.setItem('adminToken', response.adminToken);
				localStorage.setItem('adminLogon', Date.now())
				admin.setState({
					loggedIn: true,
					loginPending: false
				});
			}
	},
	downloadData: function() {
		window.location = ADMIN_DOWNLOAD_URL + "?token=" + localStorage.getItem('adminToken');
	},
	render: function () {
		var adminContent = (this.state.loggedIn)?
			<DownloadButtons
				downloadData={this.downloadData}
			/> :
			<AdminForm
				loggedIn={this.state.loggedIn}
				loginPending={this.state.loginPending}
				sendLogin={this.sendLogin}
			/>;

		return (
			<div>

				<Nav
					loggedIn={this.state.loggedIn}
					logoutClick={this.logoutClick}
					ref={(ref) => this.nav = ref}
				/>

				<main className="o-content" role="main">
					<div className="o-container">

						<h1 className="c-delimit u-headline">
							<div className="c-delimit-rule"></div>
							<span className="c-delimit-block">
								<span className="u-textEmMd">Quality of Life</span> survey data
							</span>
						</h1>

						<p className="u-textMd u-textCenter u-size11of12 Grid-cell--center">
							Download a spreadsheet of survey submissions from all registered devices in the last three months.
						</p>

						<div className="Grid Grid--withGutter Grid--alignCenter">
							<div className="Grid-cell u-size11of12 u-sm-size7of12 u-marginT2">

								{adminContent}

							</div>
						</div>

					</div>
				</main>

				<LogOutModal
					logoutOpen={this.state.logoutOpen}
					closeModal={this.logoutClose}
					logout={this.logout}
				/>

			</div>
		);
	}
});

module.exports = Admin;
