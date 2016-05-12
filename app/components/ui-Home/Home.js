var React = require("react");
var classNames = require('classnames');
var Nav = require("../ui-Nav/Nav.js");
var Registration = require("../ui-Registration/Registration.js");
var Deregistration = require("../ui-Registration/Deregistration.js");
var Loading = require("../ui-Nav/Loading.js");
var StartButton = require("./StartButton.js");

require('./../../stylesheets/app.scss');

const DEVICE_REG_URL = "https://phn-qol-survey-development.herokuapp.com/device";
//const DEVICE_REG_URL = "http://localhost:3000/device";

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
			registrationOpen: false,
			isSurveying: false
		};
	},
	toggleRegistration: function(newState) {
		if (newState === undefined)
			newState = !this.state.registrationOpen;

		this.setState({ registrationOpen: newState });
	},
	deregisterDevice: function() {
		localStorage.clear();
		this.setState({
			deviceRegistered: false,
			registrationOpen: false
		});
	},
	/**
	 * Handles device registration by communicating with the server via AJAX,
	 * parsing the result for success or failure.
	 *
	 * @param {string} providerCode	The (case-insensitive) provider code to
	 * 								search on the server.
	 */
	registerDevice: function(providerCode, validationFailCallback) {
		var deviceInfo = {
				providerCode: providerCode
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
						if (result.errors) {
							return validationFailCallback();
						}

						var token = result.token,
							region = result.provider.region;

						localStorage.setItem('deviceToken', token);
						localStorage.setItem('phnRegion', region);
						this.props.region = region;
						this.setState(
							{
								deviceRegistered: true,
								registrationOpen: false
							}
						);
					});
			})
			.catch((err) => {
				console.log("Error!");
				console.log(err);
			});
	},
	/**
	 * Used to decide which registaration modal to show.
	 */
	registrationModal: function() {
		if ( ! this.state.deviceRegistered) {
			return (
				<Registration
					registerDevice={this.registerDevice}
					registrationOpen={this.state.registrationOpen}
					region={this.props.region}
					toggleRegistration={this.toggleRegistration}
					ref={(ref) => this.registration = ref}
				/>
			);
		} else {
			return(
				<Deregistration
					deregisterDevice={this.deregisterDevice}
					registrationOpen={this.state.registrationOpen}
					region={this.props.region}
					toggleRegistration={this.toggleRegistration}
					ref={(ref) => this.registration = ref}
				/>
			);
		}
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
					surveyInProgress={false}
				/>

				<main className="o-content" role="main">
					<div className="o-container">

						<h1 className="c-delimit u-headline">
							<div className="c-delimit-rule"></div>
							<span className="c-delimit-block">
								<span className="u-textEmMd">Quality of Life</span> survey
							</span>
						</h1>

						<p className="u-textMd">You are about to complete the World Health Organization’s Quality of Life survey, which hopes to assess an individual's perception of their quality of life in the context of the culture and values in which they live. This survey will not record any personally identifiable information.</p>
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

						<div className="c-delimit u-textCenter u-marginT2 u-marginB2">
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

				{this.registrationModal()}

				<Loading />

			</div>
		);
	}
});

module.exports = Home;
