var React = require('react');
var Answer = require('./Answer.js');

var Question = React.createClass({
	getInitialState: function() {
		return {
			chosen: undefined
		};
	},
	getDefaultProps: function() {
		return {
			answers: []
		}
	},
	updateAnswers: function(newAnswerValue) {
		this.setState({ chosen: newAnswerValue });
		this.props.answers.map(function(answer) {
			if (answer.props.value === newAnswerValue)
				answer.props.activate();
			else
				answer.props.deactivate();
		});
	},
	createAnswers: function(answers) {
		var questionNumber = this.props.questionData.number;
		var updateAnswers = this.updateAnswers;

		if (this.props.answers.length > 0) return this.props.answers;

		var answerJsx = [];

		answers.map(
			function(answer, i) {
				answerJsx.push(<Answer 
					key={i}
					value={answer.value}
					updateAnswers={updateAnswers}
					number={answer.value}
					label={answer.label}
					questionNumber={questionNumber}
					question={this}
					ref={(ref) => answers.push(ref)}
				/>);
			}
		);
		
		this.props.answers = answerJsx;
		console.log(answerJsx);
		return answerJsx;
	},
	render: function() {
		return (
			<div>
				<div className="c-question">

					<p className="c-question-ask Media">
						<span className="c-question-ask--number Media-figure">
							{this.props.questionData.number}.
						</span>
						<span className="Media-body">
							{this.props.questionData.text}
						</span>
					</p>

					<div className="c-question-choices t-radioInputs">
						{this.createAnswers(this.props.questionData.answers)}
					</div>

				</div>
			</div>
		)
	}
})

module.exports = Question;
