var React = require("react");
var classNames = require('classnames');
var Nav = require("../ui-Nav/Nav.js");
var IcActive = require('../ui-Icons/Icons.js').IcActive;
var IcChoice = require('../ui-Icons/Icons.js').IcChoice;
var IcSubmit = require('../ui-Icons/Icons.js').IcSubmit;
var SubmitSurveys = require('./SubmitSurveys');

require('./../../stylesheets/app.scss');

var QuestionAsked = React.createClass({
	render: function() {
		return (
			<p className="c-question-ask Media">
				<span className="c-question-ask--number Media-figure">
					{this.props.number}.
				</span>
				<span className="Media-body">
					{this.props.text}
				</span>
			</p>
		)
	}
});

var QuestionAskedInputRadio = React.createClass({
	getInitialState: function() {
		return {
			checked: undefined
		}
	},
	activate: function(genderChangeEvent) {
		var newState = true;
		this.setState({ checked: (newState)? true : undefined });
		this.props.updateGroup(this.props.number)
	},
	deactivate: function() {
		this.setState({ checked: false });
	},
	render: function() {
		var choiceClassName = classNames({
			'c-question-choices--option': true,
			'is-active': this.state.checked
		});

		return (
			<div className={choiceClassName} onClick={this.activate}>
				<input name={this.props.name} type="radio" value={this.props.value} checked={this.state.checked} />
				<label className="">
					{this.props.label}
				</label>
				<IcChoice active="" />
			</div>
		)
	}
});

var AboutForm = React.createClass({
	getDefaultProps: function() {
		return {
			genderQuestions: [],
			indigenousQuestions: []
		}
	},
	genderGroupChange: function(setValue) {
		this.props.genderQuestions.map(function(question) {
			if (question.props.number !== setValue)
				question.deactivate();
		});
	},
	ageGroupChange: function(setValue) {
		this.props.ageQuestions.map(function(question) {
			if (question.props.number !== setValue)
				question.deactivate();
		});
	},
	educationGroupChange: function(setValue) {
		this.props.educationQuestions.map(function(question) {
			if (question.props.number !== setValue)
				question.deactivate();
		});
	},
	indigenousGroupChange: function(setValue) {
		this.props.indigenousQuestions.map(function(question) {
			if (question.props.number !== setValue)
				question.deactivate();
		});
	},
	render: function() {
		return (
			<form className="" method="post" action="">
				<div className="c-question">
					<QuestionAsked number="1" text="What is your gender?" />
					<div className="c-question-choices t-radioInputs">
						<QuestionAskedInputRadio
							updateGroup={this.genderGroupChange}
							ref={(ref) => this.props.genderQuestions.push(ref)}
							name="gender"
							value="Male"
							number={1}
							label="Male"
						/>
						<QuestionAskedInputRadio
							updateGroup={this.genderGroupChange}
							ref={(ref) => this.props.genderQuestions.push(ref)}
							name="gender"
							value="Female"
							number={2}
							label="Female"
						/>
					</div>
				</div>

				<div className="c-question">
					<QuestionAsked number="2" text="How old are you?" />
					<div className="c-question-choices t-radioInputs">
						<QuestionAskedInputRadio
							updateGroup={this.ageGroupChange}
							ref={(ref) => this.props.ageQuestions.push(ref)}
							name="age"
							value="15"
							number={1}
							label="15"
						/>
						<QuestionAskedInputRadio
							updateGroup={this.ageGroupChange}
							ref={(ref) => this.props.ageQuestions.push(ref)}
							name="age"
							value="15–24"
							number={2}
							label="15–24"
						/>
						<QuestionAskedInputRadio
							updateGroup={this.ageGroupChange}
							ref={(ref) => this.props.ageQuestions.push(ref)}
							name="age"
							value="25–34"
							number={3}
							label="25–34"
						/>
						<QuestionAskedInputRadio
							updateGroup={this.ageGroupChange}
							ref={(ref) => this.props.ageQuestions.push(ref)}
							name="age"
							value="35–44"
							number={4}
							label="35–44"
						/>
						<QuestionAskedInputRadio
							updateGroup={this.ageGroupChange}
							ref={(ref) => this.props.ageQuestions.push(ref)}
							name="age"
							value="45–54"
							number={5}
							label="45–54"
						/>
						<QuestionAskedInputRadio
							updateGroup={this.ageGroupChange}
							ref={(ref) => this.props.ageQuestions.push(ref)}
							name="age"
							value="55–64"
							number={6}
							label="55–64"
						/>
						<QuestionAskedInputRadio
							updateGroup={this.ageGroupChange}
							ref={(ref) => this.props.ageQuestions.push(ref)}
							name="age"
							value="65+"
							number={7}
							label="65+"
						/>
					</div>
				</div>

				<div className="c-question">
					<QuestionAsked number="3" text="What is the highest education you received?" />
					<div className="c-question-choices t-radioInputs">
						<QuestionAskedInputRadio
							updateGroup={this.educationGroupChange}
							ref={(ref) => this.props.educationQuestions.push(ref)}
							name="education"
							value="Primary school"
							number={1}
							label="Primary school"
						/>
						<QuestionAskedInputRadio
							updateGroup={this.educationGroupChange}
							ref={(ref) => this.props.educationQuestions.push(ref)}
							name="education"
							value="High school"
							number={2}
							label="High school"
						/>
						<QuestionAskedInputRadio
							updateGroup={this.educationGroupChange}
							ref={(ref) => this.props.educationQuestions.push(ref)}
							name="education"
							value="Tafe certificate or diploma"
							number={3}
							label="Tafe certificate or diploma"
						/>
						<QuestionAskedInputRadio
							updateGroup={this.educationGroupChange}
							ref={(ref) => this.props.educationQuestions.push(ref)}
							name="education"
							value="University"
							number={4}
							label="University"
						/>
					</div>
				</div>

				<div className="c-question">
					<QuestionAsked number="4" text="Do you identify as Indigenous Australian?" />
					<div className="c-question-choices t-radioInputs">
						<QuestionAskedInputRadio
							number="1"
							name="indigenous"
							value="true"
							updateGroup={this.indigenousGroupChange}
							ref={(ref) => this.props.indigenousQuestions.push(ref)}
							label="Yes"
						/>
						<QuestionAskedInputRadio
							number="2"
							name="indigenous"
							value="false"
							updateGroup={this.indigenousGroupChange}
							ref={(ref) => this.props.indigenousQuestions.push(ref)}
							label="No"
						/>
					</div>
				</div>

				<div className="c-question">
					<QuestionAsked number="5" text="How many sessions have you had with this particular health provider?" />
					<div className="t-selectInputs">
						<select>
							<option value="" disabled selected>Choose from these options</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</select>
					</div>
				</div>

				<SubmitSurveys submitSurvey={this.props.submitSurvey} />

			</form>
		)
	}
});

module.exports = AboutForm;
