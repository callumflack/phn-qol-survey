var React = require("react");

// Data
var questionData = require('./data/questions.js');

// Utils
var smoothScroll = require('../util/smoothscroll.js');

// Layout
var Nav = require('../ui-Nav/Nav.js');

// Forms
var AboutForm = require('./AboutForm.js');
var QolForm = require('./QolForm.js');

// Delimiters & submission
var StartAboutSurvey = require('./StartAboutSurvey');
var SubmitSurveys = require('./SubmitSurveys');

// Modals
var Registration = require("../ui-Registration/Registration.js");
var Deregistration = require("../ui-Registration/Deregistration.js");
var Score = require('./Score.js');

// Constants
const NXT_QUESTION_SCROLL_DURATION = 800;
const NXT_QUESTION_SCROLL_DELAY = 400;

// Production
const SURVEY_SUBMIT_URL = "https://phn-qol-survey.herokuapp.com/survey";
const SEND_SCORES_URL = "https://phn-qol-survey.herokuapp.com/share";

// Staging
// const SURVEY_SUBMIT_URL = "https://phn-qol-survey-staging.herokuapp.com/survey";
// const SEND_SCORES_URL = "https://phn-qol-survey-staging.herokuapp.com/share";

// Development
// const SURVEY_SUBMIT_URL = "https://phn-qol-survey-development.herokuapp.com/survey";
// const SEND_SCORES_URL = "https://phn-qol-survey-development.herokuapp.com/share";

// Development
// const SURVEY_SUBMIT_URL = "http://localhost:3000/survey";
// const SEND_SCORES_URL = "http://localhost:3000/share";


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
			})(),
			submissionId: undefined
		}
	},
	getInitialState: function() {
		var deviceToken = localStorage.getItem('deviceToken');
		return {
			deviceRegistered: deviceToken? true : false,
			registrationPending: false,
			surveyInProgress: false,
			registrationOpen: false,
			scoreOpen: false,
			surveyForm: false,
			participantForm: false
		};
	},
	/**
	 * Validates the entire submission, then uses Fetch to send the submission
	 * to the server.
	 */
	submitSurvey: function() {
		var error = false,
			surveyResponses,
			participant;

		try {
			surveyResponses = this.validateSurvey();
		} catch(formError) {
			if (formError.code = "validation") {
				// Furnish error states.
				var invalidQuestions = formError.questions,
				firstInvalid = invalidQuestions[0];
				firstInvalid.questionComponent.scrollTo();
				error = true;
			}
		}
		try {
			participant = this.validateParticipant();
		} catch (formError) {
			if (formError.code = "validation") {
				// Furnish error states.
				var invalidQuestions = formError.questions,
				firstInvalid = invalidQuestions[0];
				this.aboutForm.scrollToQuestion(firstInvalid.questionComponent);
				error = true;
			}
		}
		if (error === true) return;

		this.sendSubmission(surveyResponses, participant);
	},
	/**
	 * Initiates the AJAX post to the server, requesting the storage of both the
	 * survey question responses and the participant data.
	 * @param {Number[]} surveyResponses	An array of responses, each element
	 * 										corresponding to the ordered set of
	 * 										questions and responses 0..4.
	 * @param {Participant} participant	The participant information gathered
	 * 									from the About You section.
	 */
	sendSubmission: function(surveyResponses, participant) {
		var headers = new Headers();

		headers.set('Content-Type', 'application/json');
		headers.set('Accept', 'application/json');
		headers.set('Device-Token', localStorage.getItem('deviceToken'));

		return fetch(
			SURVEY_SUBMIT_URL,
			{
				method: "POST",
				mode: "cors",
				headers: headers,
				body: JSON.stringify({
					survey: surveyResponses,
					participant: participant
				})
			})
			.then((response) => response.json())
			.then((response) => {
				this.props.submissionId = response.submission.submissionId;
				this.showScores();
			})
			.catch((err) => {
				console.error(err);
				console.error("Error sending submission!");
			});
	},
	/**
	 * Displays the score modal, funishing it with score data based on the
	 * survey answers selected.
	 */
	showScores: function() {
		var scores = this.calculateScores();

		this.physicalScore = scores.physical;
		this.psychScore = scores.psychologocial;
		this.socialScore = scores.social;
		this.environmentScore = scores.environment;


		this.setState({
			registrationOpen: false,
			scoreOpen: true
		});
	},
	/**
	 * Calculates each of the domain scores (as averages)
	 */
	calculateScores: function() {
		var scores = {
				physical: [],
				psychologocial: [],
				social: [],
				environment: []
			},
			numQuestions = questionData.length;

		for (var i = 0; i < numQuestions; i++) {
			var questionResponse = this.props.questionResponses[i] + 1;
			switch (i) {
				case 2: case 3: case 25:
					// Negatively framed questions
					questionResponse = 5 - questionResponse;
					break;
				case 2: case 3: case 9: case 14: case 15: case 16: case 17:
					scores.physical.push(questionResponse);
					break;
				case 4: case 5: case 6: case 10: case 18: case 25:
					scores.psychologocial.push(questionResponse);
					break;
				case 19: case 20: case 21:
					scores.social.push(questionResponse);
					break;
				case 7: case 8: case 11: case 12: case 13: case 22: case 23:
				case 24:
					scores.environment.push(questionResponse);
					break;
			}
		}
		var average = (a) =>
			{ var t=0, i=0; for (;i<a.length;i++) t+=a[i]; return t/a.length; }

		return {
			physical: average(scores.physical),
			psychologocial: average(scores.psychologocial),
			social: average(scores.social),
			environment: average(scores.environment)
		}
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
		var numQuestions = questionData.length,
			responses = [];
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
						return e;
					}());
			}
			validationError.questions = invalidQuestions;
			throw validationError;
		}

		for (var i = 0; i < numQuestions; i++)
			responses.push(this.props.questionResponses[i]);

		return responses;
	},
	/**
	 * Validates the 'About You' information provided by the user.
	 * @throws {ParticipantValidationError}	Thrown if there are issues with the
	 * 										participant information.
	 */
	validateParticipant: function() {
		var aboutForm = this.aboutForm,
			participant = {
				gender: aboutForm.props.gender,
				ageGroup: aboutForm.props.age,
				region: localStorage.getItem("phnRegion"),
				education: aboutForm.props.education,
				indigenous: aboutForm.props.indigenous,
				sessionNumber: aboutForm.props.sessions
			},
			erroneousQuestions = [];

		if ( ! /(fe)?male/i.test(participant.gender))
			erroneousQuestions.push(
				function() {
					var e = new Error("Missing gender");
					e.code = "missing_answer";
					e.questionComponent = aboutForm.genderQuestion;
					aboutForm.setErrorState("gender");
					return e;
				}()
			);
		if ( !participant.ageGroup)
			erroneousQuestions.push(
				function() {
					var e = new Error("Missing age");
					e.code = "missing_answer";
					e.questionComponent = aboutForm.ageQuestion;
					aboutForm.setErrorState("age");
					return e;
				}()
			);
		if ( ! participant.education)
			erroneousQuestions.push(
				function() {
					var e = new Error("Missing education");
					e.code = "missing_answer";
					e.questionComponent = aboutForm.educationQuestion;
					aboutForm.setErrorState("education");
					return e;
				}()
			);
		if ( ! participant.indigenous)
			erroneousQuestions.push(
				function() {
					var e = new Error("Missing indigenous identity");
					e.code = "missing_answer";
					e.questionComponent = aboutForm.indigenousQuestion;
					aboutForm.setErrorState("indigenous");
					return e;
				}()
			);
		if ( ! participant.sessionNumber)
			erroneousQuestions.push(
				function() {
					var e = new Error("Missing sessions number");
					e.code = "missing_answer";
					e.questionComponent = aboutForm.sessionsQuestion;
					aboutForm.setErrorState("sessions");
					return e;
				}()
			);

		if (erroneousQuestions.length)
			throw function() {
					var e = new Error("About you errors");
					e.code = "validation";
					e.questions = erroneousQuestions;
					return e;
				}();

		return participant;
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
		if ( ! this.state.surveyInProgress) this.setState({ surveyInProgress: true });
		this.props.questionResponses[questionId - 1] = response;

		function countSet(a) {
			var b = a.length, c = 0;
			while (b--) c+= (a[b] !== undefined)? 1 : 0; return c;
		}

		this.props.questionsAnswered = countSet(
			this.props.questionResponses
		);

		this.nav.updateSurveyProgress(this.props.questionsAnswered);

		if ( ! isNaN(response)) {
			setTimeout(
				() => { (questionData[questionId])?
					questionData[questionId].questionComponent.scrollTo(
						NXT_QUESTION_SCROLL_DURATION
					)
					: null; },
				NXT_QUESTION_SCROLL_DELAY
			)

			if (questionId === questionData.length)
				setTimeout(
					() => {
						smoothScroll(
							React.findDOMNode(this.participantDelimiter),
							NXT_QUESTION_SCROLL_DURATION
						)
					},
					NXT_QUESTION_SCROLL_DELAY
				)
		}
	},
	/**
	 * Begins the survey for the user, clearing all currently selected responses
	 * and scrolling to the first question in the survey.
	 */
	startSurvey: function() {
		this.setState({ surveyInProgress: true });
		this.props.questionsAnswered = 0;
		this.props.questionResponses = (function() {
			var a = [], b = questionData.length;
			while(b--) {
				a.push(undefined);
				questionData[b].questionComponent.updateAnswers(undefined);
			}
			return a;
		})();
		this.showSurveyForm();
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
	/**
	 * Displays the survey form for the user to complete.
	 */
	showSurveyForm: function() {
		// TODO: Make this turn the survey form on.
		this.setState({ surveyForm: true });
		var scrollTime = isNaN(scrollTime)? 1200 : scrollTime;
		smoothScroll(React.findDOMNode(this.surveyForm), scrollTime);
	},
	/**
	 * Makes the 'About You' section available to the user so that they can fill
	 * it in and hit submit.
	 * @param {Number} scrollTime	(Optional) duration of the scroll, in
	 * 								milliseconds. Default 1200.
	 */
	showAboutForm: function(scrollTime) {
		// TODO: Make this turn the about you form on.
		this.setState({ participantForm: true });
		var scrollTime = isNaN(scrollTime)? 1200 : scrollTime;
		smoothScroll(React.findDOMNode(this.aboutForm), scrollTime);
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
	/**
	 * Makes a request to the server to forward an SMS with the user's score
	 * details. The phone number must be supplied for this to work.
	 * @param {String} phoneNumber	The phone number to send the SMS message.
	 * @param {Function} callback	Called when the SMS API request is answered.
	 * @throws {Error}	Thrown if the phone number is not a valid Australian
	 * 					phone number or there is some other system error.
	 */
	sendSms: function(phoneNumber, callback) {
		var submissionId = this.props.submissionId,
			headers = new Headers();

		headers.set('Content-Type', 'application/json');
		headers.set('Accept', 'application/json');
		headers.set('Device-Token', localStorage.getItem('deviceToken'));

		return fetch(
			SEND_SCORES_URL,
			{
				method: "POST",
				mode: "cors",
				headers: headers,
				body: JSON.stringify({
					submissionId: submissionId,
					address: phoneNumber
				})
			})
			.then(callback)
			.catch((err) => {
				console.error(err);
				console.error("Error sending submission!");
				callback(err);
			});
	},
	/**
	 * Makes a request to the server to forward an SMS with the user's score
	 * details. The phone number must be supplied for this to work.
	 * @param {String} phoneNumber	The phone number to send the SMS message.
	 * @param {Function} callback	Called when the email API request is met.
	 * @throws {Error}	Thrown if the email address isn't valid or there is
	 * 					some other system error.
	 */
	sendEmail: function(email, callback) {
		var submissionId = this.props.submissionId,
			headers = new Headers();

		headers.set('Content-Type', 'application/json');
		headers.set('Accept', 'application/json');
		headers.set('Device-Token', localStorage.getItem('deviceToken'));

		return fetch(
			SEND_SCORES_URL,
			{
				method: "POST",
				mode: "cors",
				headers: headers,
				body: JSON.stringify({
					submissionId: submissionId,
					address: email
				})
			})
			.then(callback)
			.catch((err) => {
				console.error(err);
				console.error("Error sending submission!");
				callback(err);
			});
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

			<main className="o-content u-marginT5 u-sm-marginT7" role="main">
					<div className="o-container">
						<p className="u-textMd u-textWtRg">This survey asks how you feel about your quality of life, as well as a little about who you are.</p>
						<p className="u-textMd u-colorBrandCount">Please answer each question by assessing your life over the last 2 weeks.</p>
						<div className="c-delimit u-textCenter u-marginT2">
							<div className="c-delimit-rule c-delimit-rule--active"></div>
							<span className="c-delimit-block">
								<button className="Button t-button" type="button" onClick={this.startSurvey} name="button">Let's begin</button>
							</span>
							<p className="u-textXs--medium u-textCenter u-marginT"><a href="#">Cancel</a></p>
						</div>

						<QolForm
							ref={(ref) => this.surveyForm = ref}
							questionData={questionData}
							recordQuestionResponse={this.recordQuestionResponse}
							showAboutForm={this.showAboutForm}
							supressSubmit={this.supressSubmit}
						/>

						<StartAboutSurvey
							ref={(ref) => this.participantDelimiter = ref}
							showAboutForm={this.showAboutForm}
						/>

						<AboutForm
							ref={(ref) => this.aboutForm = ref}
							supressSubmit={this.supressSubmit}
						/>

						<SubmitSurveys
							submitSurvey={this.submitSurvey}
						/>

					</div>
				</main>

				{this.registrationModal()}

				<Score
					ref={(ref) => this.scoresModal = ref}
					scoreOpen={this.state.scoreOpen}
					closeScoreHandler={this.closeScoreHandler}
					physical={this.physicalScore}
					psych={this.psychScore}
					social={this.socialScore}
					environment={this.environmentScore}
					sendEmail={this.sendEmail}
					sendSms={this.sendSms}
				/>

			</div>
		);
	}
});

module.exports = SurveyPage;
