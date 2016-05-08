var React = require("react");
var Nav = require('../ui-Nav/Nav.js');
var AboutForm = require('./AboutForm.js');
var questionData = require('./data/questions.js');

var Registration = require("../ui-Registration/Registration.js");
var Deregistration = require("../ui-Registration/Deregistration.js");

var QolForm = require('./QolForm.js');
var Score = require('./Score.js');

var SurveyPage = React.createClass({
	getDefaultProps: function() {
		var region = localStorage.getItem('phnRegion');
		return {
			region: region,
			questionsAnswered: 0,
			questionResponses: (function() {
				var a = [], b = questionData.length;
				while(b--) a.push(undefined);
				return a;
			})()
		}
	},
	getInitialState: function() {
		var deviceToken = localStorage.getItem('deviceToken');
		return {
			deviceRegistered: deviceToken? true : false,
			surveyInProgress: false,
			registrationOpen: false,
			scoreOpen: false
		};
	},
	submitSurvey: function() {
		this.setState({
			registrationOpen: false,
			scoreOpen: true
		});
	},
	recordQuestionResponse: function(questionId, response) {
		this.props.questionResponses[questionId] = response;

		function countSet(a) {
			var b = a.length, c = 0;
			while (b--) c+= (a[b] !== undefined)? 1 : 0; return c;
		}
		this.props.questionsAnswered = countSet(
			this.props.questionResponses
		);
		this.nav.props.questionsAnswered = this.props.questionsAnswered;
		this.nav.forceUpdate();
	},
	startSurvey: function() {
		this.setState({ surveyInProgress: true });
		this.props.questionsAnswered = 0;
		this.props.questionResponses = (function() {
			var a = [], b = questionData.length;
			while(b--) a.push(undefined);
			return a;
		})()
	},
	deregisterDevice: function() {
		localStorage.clear();
		this.setState({
			deviceRegistered: false,
			registrationOpen: false
		});
		setTimeout(() => { window.location = "/"}, 400);
	},
	closeScoreHandler: function() {
		this.setState( { scoreOpen: false });
	},
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
	toggleRegistration: function(newState) {
		if (newState === undefined)
			newState = !this.state.registrationOpen;

		this.setState({ registrationOpen: newState });
	},
	render: function () {
		return (
			<div>
				<Nav
					deviceRegistered={this.state.deviceRegistered}
					region={this.props.region}
					ref={(ref) => this.nav = ref}
					surveyInProgress={this.state.surveyInProgress}
					toggleRegistration={this.toggleRegistration}
					questionsAnswered={this.props.questionsAnswered}
					blocked="true"
				/>

				<main className="o-content" role="main">
					<div className="o-container">
						<p className="u-textMd u-textWtRg">This survey asks how you feel about your quality of life, as well as a little about who you are.</p>
						<p className="u-textMd u-colorBrandCount">Please answer each question by assessing your life over the last 2 weeks.</p>
						<div className="c-delimit u-textCenter u-marginT2 u-marginB6">
							<div className="c-delimit-rule c-delimit-rule--active"></div>
							<span className="c-delimit-block">
								<button className="Button t-button" type="button" name="button">Let's begin</button>
							</span>
							<p className="u-textXs--medium u-textCenter u-marginT"><a href="#">Cancel</a></p>
						</div>

						<QolForm
							questionData={questionData}
							recordQuestionResponse={this.recordQuestionResponse}
							startSurveyCallback={this.startSurvey}
						/>
						<AboutForm submitSurvey={this.submitSurvey} />

					</div>
				</main>

				{this.registrationModal()}

				<Score
					scoreOpen={this.state.scoreOpen}
					closeScoreHandler={this.closeScoreHandler}
				/>

			</div>
		);
	}
});

module.exports = SurveyPage;
