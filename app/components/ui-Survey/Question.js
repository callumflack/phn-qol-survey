var React = require('react');
var Answer = require('./Answer.js');
var smoothScroll = require('../util/smoothscroll.js');

var Question = React.createClass({
	getInitialState: function() {
		return {
			chosen: undefined,
			error: undefined
		};
	},
	getDefaultProps: function() {
		return {
			answerComponents: []
		}
	},
	/**
	 * Used to set (or unset) an error state on the Question.
	 * @param {boolean} hasError	A boolean TRUE if the question should show
	 * 								a validation error, FALSE if not.
	 */
	setErrorState: function(hasError) {
		this.setState({ error: hasError });
	},
	/**
	 * Scrolls the viewport to this Question.
	 * @param {Number} scrollTime	The number of milliseconds that the scroll
	 * 								animation should last.
	 */
	scrollTo: function(scrollTime) {
		var scrollTime = isNaN(scrollTime)? 1800 : scrollTime;
		smoothScroll(React.findDOMNode(this.props.questionComponent), scrollTime);
	},
	/**
	 * Used to toggle off the non-selected answers, and toggle on the selected
	 * answer. This calls the supplied (ancestor) recordQuestionResponse
	 * function.
	 * @param {Number} newAnswerValue	The response to record for this question.
	 */
	updateAnswers: function(newAnswerValue) {
		this.props.recordQuestionResponse(this.props.number, newAnswerValue);
		this.setState(
			{
				chosen: newAnswerValue,
				error: undefined 
			}
		);
	},
	render: function() {
		var questionNumber = this.props.number;
		var updateAnswers = this.updateAnswers;
		var question = this;
		var answers = this.props.answers;
		var chosen = this.state.chosen;

		return (
			<div ref={(ref) => this.props.questionComponent = ref}>
				<div className={"c-question" + ((this.state.error)? ' has-error' : '')}>

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
