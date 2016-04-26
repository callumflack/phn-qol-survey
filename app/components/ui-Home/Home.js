var React = require("react");
var classNames = require('classnames');
var Nav = require("../ui-Nav/Nav.js");
var Registration = require("../ui-Registration/Registration.js");
var StartButton = require("./StartButton.js");

require('./../../stylesheets/app.scss');

var Home = React.createClass({
	getDefaultProps: function() {
		var region = localStorage.getItem('phnRegion');
		return {
			region: region
		}
	},
	getInitialState: function() {
		var deviceToken = localStorage.getItem('deviceToken');
		return {
			deviceRegistered: deviceToken? true : false,
			registrationOpen: false
		};
	},
	toggleRegistration: function(newState) {
		if (newState === undefined)
			newState = !this.state.registrationOpen;
			
		this.setState({ registrationOpen: newState });
	},
	/**
	 * Handles device registration by communicating with the server via AJAX,
	 * parsing the result for success or failure.
	 * 
	 * @param {string} providerCode	The (case-insensitive) provider code to
	 * 								search on the server.
	 */
	registerDevice: function(providerCode) {
		var deviceInfo = {
				providerCode: this.pcInput.value
			},
			headers = new Headers();

		headers.set('Content-Type', 'application/json');
		headers.set('Accept', 'application/json');
		return fetch(
			DEVICE_REG_URL,
			{
				method: "POST",
				mode: "cors",
				headers: headers,
				body: JSON.stringify(deviceInfo)
			})
			.then((response) => {
				response
					.json()
					.then((result) => {
						localStorage.setItem('deviceToken', result.token);
						
					});
			})
			.catch((err) => {
				console.log("Error!");
				console.log(err);
			});
	},
	render: function () {
		var delimitRuleClasses = classNames({
			'c-delimit-rule': true,
			'c-delimit-rule--active': this.state.deviceRegistered,
			'c-delimit-rule--disabled': !this.state.deviceRegistered
		});
		return (
			<div>

				<Nav
					deviceRegistered={this.state.deviceRegistered}
					region={this.props.region}
					toggleRegistration={this.toggleRegistration}
					ref={(ref) => this.nav = ref}
				/>

				<main className="o-content" role="main">
					<div className="o-container">

						<h1 className="c-delimit u-headline">
							<div className="c-delimit-rule"></div>
							<span className="c-delimit-block">
								<span className="u-textEmMd">Quality of Life</span> survey
							</span>
						</h1>

						<p className="u-textMd">This survey hopes to assess quality of life where it is defined as individuals perceptions of their position in life in the context of the culture and value systems in which they live and in relation to their goals, expectations, standards and concerns. It is based on the World Health Organisation’s Quality of Life Survey.</p>
						<p className="u-textRg--light">For more information, please contact Northern Queensland Primary Health Network:</p>
						<ul className="o-listClean u-textRg--light">
							<li><a href="tel:1300-7746279">
								<span className="c-listItemTag">T</span>1300 PRIMARY (7746279)
							</a></li>
							<li><a href="mailto:admin@primaryhealth.com.au">
								<span className="c-listItemTag">E</span>admin@primaryhealth.com.au
							</a></li>
							<li><a href="http://www.primaryhealth.com.au">
								<span className="c-listItemTag">W</span>www.primaryhealth.com.au
							</a></li>
						</ul>

						<div className="c-delimit u-textCenter u-marginT2">
							<div className={delimitRuleClasses}></div>
							<span className="c-delimit-block">
								<StartButton deviceRegistered={this.state.deviceRegistered} />
							</span>
							{
								(! this.state.deviceRegistered)?
									<p className="u-textXs--medium u-textCenter u-marginT">You need to register this device first</p>
									: ""
							}
							</div>

					</div>
				</main>

				<Registration
					registerDevice={this.registerDevice}
					registrationOpen={this.state.registrationOpen}
					toggleRegistration={this.toggleRegistration}
					ref={(ref) => this.registration = ref}
				/>

			</div>
		);
	}
});

module.exports = Home;
