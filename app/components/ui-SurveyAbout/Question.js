var React = require('react');
var classNames = require('classnames');
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

		var toggleInputClass = classNames({
			't-radioInputs': false,
			't-selectInputs': true
		});

		var iconActive = classNames({
			'is-active': this.state.chosen
		});

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

					<div className="c-question-choices" >
						{this.props.questionData.answers.map(function(answer, i) {
							return <Answer key={i} value={answer.value} label={answer.label} question={this}/>
						})}
					</div>

				</div>
			</div>
		)
	}
})

module.exports = Question;
