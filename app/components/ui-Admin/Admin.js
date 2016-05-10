var React = require("react");
var Nav = require("../ui-Nav/Nav.js");
var AdminForm = require("../ui-Admin/AdminForm.js");
var DownloadButtons = require("../ui-Admin/DownloadButtons.js");
var IcAvatar = require('../ui-Elements/Icons.js').IcAvatar;
var IcDownload = require('../ui-Elements/Icons.js').IcDownload;

require('./../../stylesheets/app.scss');

var Admin = React.createClass({
	render: function () {
		var adminContent = (this.props.loggedIn)?
			<AdminForm /> : <DownloadButtons />;

		return (
			<div>

				<Nav
					loggedIn={this.props.loggedIn}
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
							Download a spreadsheet of survey submissions  from all registered devices in the last three months.
						</p>

						<div className="Grid Grid--withGutter Grid--alignCenter">
							<div className="Grid-cell u-size11of12 u-sm-size7of12 u-marginT2">

								{adminContent}

							</div>
						</div>

					</div>
				</main>
			</div>
		);
	}
});

module.exports = Admin;
