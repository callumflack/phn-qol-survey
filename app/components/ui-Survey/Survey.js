var React = require("react");
var Nav = require('../ui-Nav/Nav.js');
var AboutForm = require('../ui-SurveyAbout/Form.js');
var questionData = require('./data/questions.js');
var Form = require('./Form.js');
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
			surveyInProgress: false
		};
	},
	updateProgress: function() {
		
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
	render: function () {
		return (
			<div>
				<Nav
					deviceRegistered={this.state.deviceRegistered}
					region={this.props.region}
					ref={(ref) => this.nav = ref}
					surveyInProgress={this.state.surveyInProgress}
					questionsAnswered={this.props.questionsAnswered}
				/>

				<main className="o-content" role="main">
					<div className="o-container">

						<p className="u-textMd u-textWtRg">This assessment asks how you feel about your quality of life, health, or other areas of your life.</p>
						<p className="u-textMd u-colorBrandCount">Please answer all the questions.</p>
						<p className="u-textMd u-textWtRg">Please keep in mind your standards, hopes, pleasures and concerns. We ask that you think about your life in the last two weeks.</p>
						<p className="u-textMd u-colorBrandCount">If you are unsure about which response to give to a question, please choose the one that appears most appropriate. This can often be your first response.</p>
						<p className="u-textMd u-textWtRg">Please read each question, assess your feelings, and choose the number on the scale for each question that gives the best answer for you.</p>

						<div className="c-delimit u-textCenter u-marginT2 u-marginB6">
							<div className="c-delimit-rule c-delimit-rule--active"></div>
							<span className="c-delimit-block">
								<button className="Button t-button" type="button" name="button">Let's begin</button>
							</span>
							<p className="u-textXs--medium u-textCenter u-marginT"><a href="#">Cancel</a></p>
						</div>

						<AboutForm startSurveyCallback={this.startSurvey} />
						<Form
							questionData={questionData}
							recordQuestionResponse={this.recordQuestionResponse}
						/>

					</div>
				</main>

				<Score />

			</div>
		);
	}
});

module.exports = SurveyPage;
