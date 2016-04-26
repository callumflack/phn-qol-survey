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
			answerComponents: []
		}
	},
	updateAnswers: function(newAnswerValue) {
		this.setState({ chosen: newAnswerValue });
	},
	render: function() {
		var questionNumber = this.props.number;
		var updateAnswers = this.updateAnswers;
		var question = this;
		var answers = this.props.answers;
		var chosen = this.state.chosen;

		return (
			<div>
				<div className="c-question">

					<p className="c-question-ask Media">
						<span className="c-question-ask--number Media-figure">
							{this.props.number}.
						</span>
						<span className="Media-body">
							{this.props.text}
						</span>
					</p>

					<div className="c-question-choices t-radioInputs">
						{
							answers.map(
								function(answer, i) {
									return (<Answer 
										key={i}
										value={answer.value}
										updateAnswers={updateAnswers}
										number={answer.value}
										label={answer.label}
										questionNumber={questionNumber}
										question={question}
										selected={answer.value === chosen}
									/>);
								}
							)
						}
					</div>

				</div>
			</div>
		)
	}
})

module.exports = Question;
