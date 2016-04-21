var React = require('react');
var IconChoice = require('../ui-Icons/Icons.js').IcChoice;

var Answer = React.createClass({
	updateQuestion: function(event) {
	},
	
	render: function() {
		return (
			<div className="c-question-choices--option " onClick={this.updateQuestion}>
				<input name={"q_" + this.props.questionNumber} value={this.props.value} type="radio"/>
				<label className="">{this.props.label}</label>
				<IconChoice />
			</div>
		)
	}
});

module.exports = Answer;
