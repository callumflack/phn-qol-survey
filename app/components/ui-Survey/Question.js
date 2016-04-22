var React = require('react');
var Answer = require('./Answer.js');

var Question = React.createClass({
	getInitialState: function() {
		return {
			answered : false
		};
	},

	handleChildChange: function(child) {
		console.log("A child has changed!");
	},

	render: function() {
		var questionNumber = this.props.questionData.number;

		var questionInfo = function() {
			for (i = 0; i < 100; i++) {
				if (i == 10)
					print("The following questions are the bee's knees.");
				if (i == 20)
					print("The following questions aren't so hot.");

				print(question[i]);
			}
		}

		return (
			<div>
				<p className="u-textSm">{questionInfo}</p>

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
						{this.props.questionData.answers.map(function(answer, i) {
							return <Answer key={i} value={answer.value} label={answer.label} questionNumber={questionNumber} question={this}/>
						})}
					</div>

				</div>
			</div>
		)
	}
})

module.exports = Question;
