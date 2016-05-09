var React = require("react");
var Nav = require('../ui-Nav/Nav.js');
var AboutForm = require('./AboutForm.js');
var questionData = require('./data/questions.js');

var Registration = require("../ui-Registration/Registration.js");
var Deregistration = require("../ui-Registration/Deregistration.js");

var QolForm = require('./QolForm.js');
var Score = require('./Score.js');

const NXT_QUESTION_SCROLL_DURATION = 800;
const NXT_QUESTION_SCROLL_DELAY = 400;

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
	/**
	 * Validates the entire submission, then uses Fetch to send the submission
	 * to the server.
	 */
	submitSurvey: function() {
		try {
			// this.validateSurvey();
		} catch(formError) {
			if (formError.code = "validation") {
				// Furnish error states.
				var invalidQuestions = formError.questions,
				firstInvalid = invalidQuestions[0];
				firstInvalid.questionComponent.scrollTo();
				return;
			}
		}
		try {
			this.validateParticipant();
		} catch (formError) {
			if (formError.code = "validation") {
				// Furnish error states.
				var invalidQuestions = formError.questions,
				firstInvalid = invalidQuestions[0];
				firstInvalid.questionComponent.scrollTo();
				return;
			}
		}
		this.setState({
			registrationOpen: false,
			scoreOpen: true
		});
	},
	/**
	 * Validates the survey question responses provided by the user. If there
	 * are questions outstanding, they are wrapped in an array of errors and
	 * thrown from this function.
	 * @throws {SurveyValidationError}	Thrown if there are one or more survey
	 * 									questions that do not have a valid
	 * 									response.
	 */
	validateSurvey: function() {
		var numQuestions = questionData.length;
		// Survey questions.
		if (this.props.questionsAnswered < numQuestions) {
			var invalidQuestions = [],
				validationError = new Error("Survey validation errors.");

			validationError.name = "validation";
			for (var i = 0; i < numQuestions; i++) {
				var questionResponse = this.props.questionResponses[i];
				if (questionResponse === undefined)
					invalidQuestions.push(function() {
						var e = new Error("Missing answer");
						e.code = "missing_answer";
						e.questionId = i;
						e.questionComponent = questionData[i].questionComponent;
						e.questionComponent.setErrorState(true);
						console.log(e.questionComponent);
						return e;
					}());
			}
			validationError.questions = invalidQuestions;
			throw validationError;
		}
	},
	/**
	 * Validates the 'About You' information provided by the user.
	 * @throws {ParticipantValidationError}	Thrown if there are issues with the
	 * 										participant information.
	 */
	validateParticipant: function() {

	},
	/**
	 * Used when a user makes her answer selection. This will store the user's
	 * choice in a local property (questionResponses), update the progress bar
	 * in the nav, and move the user onto the succeeding question.
	 * @param {Number} questionNum	The question number (not ID) that is being
	 * 								answered.
	 * @param {Number} response	The value of the chosen response, from 0..4.
	 * @throws {ParticipantValidationError}	Thrown if there are issues with the
	 * 										participant information.
	 */

	recordQuestionResponse: function(questionId, response) {
		this.props.questionResponses[questionId - 1] = response;

		function countSet(a) {
			var b = a.length, c = 0;
			while (b--) c+= (a[b] !== undefined)? 1 : 0; return c;
		}
		this.props.questionsAnswered = countSet(
			this.props.questionResponses
		);
		this.nav.props.questionsAnswered = this.props.questionsAnswered;
		this.nav.forceUpdate();

		setTimeout(
			() => { (questionData[questionId])?
				questionData[questionId].questionComponent.scrollTo(
					NXT_QUESTION_SCROLL_DURATION
				)
				: null; },
			NXT_QUESTION_SCROLL_DELAY
		)
	},
	startSurvey: function() {
		this.setState({ surveyInProgress: true });
		this.props.questionsAnswered = 0;
		this.props.questionResponses = (function() {
			var a = [], b = questionData.length;
			while(b--) a.push(undefined);
			return a;
		})();
		questionData[0].questionComponent.scrollTo();
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
	/**
	 * Used to supress a form submission, as this should be processed through
	 * AJAX. This will be handed down to the children for use when rendering
	 *
	 * @param {Event} submitEvent	The Event triggered when the browser makes
	 * 								an attempt to submit the form.
	 */
	supressSubmit: function(submitEvent) {
		submitEvent.preventDefault();
		submitEvent.stopPropagation();

		this.props.startSurveyCallback();
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

			<main className="o-content u-marginT7" role="main">
					<div className="o-container">
						<p className="u-textMd u-textWtRg">This survey asks how you feel about your quality of life, as well as a little about who you are.</p>
						<p className="u-textMd u-colorBrandCount">Please answer each question by assessing your life over the last 2 weeks.</p>
						<div className="c-delimit u-textCenter u-marginT2 u-marginB6">
							<div className="c-delimit-rule c-delimit-rule--active"></div>
							<span className="c-delimit-block">
								<button className="Button t-button" type="button" onClick={this.startSurvey} name="button">Let's begin</button>
							</span>
							<p className="u-textXs--medium u-textCenter u-marginT"><a href="#">Cancel</a></p>
						</div>

						<QolForm
							questionData={questionData}
							recordQuestionResponse={this.recordQuestionResponse}
							startSurveyCallback={this.startSurvey}
							supressSubmit={this.supressSubmit}
						/>
						<AboutForm
							submitSurvey={this.submitSurvey}
							supressSubmit={this.supressSubmit}
						/>

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
