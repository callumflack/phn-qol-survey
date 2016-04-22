var React = require('react');
var IconChoice = require('../ui-Icons/Icons.js').IcChoice;

var Answer = React.createClass({
	getInitialState: function() {
		return {
			chosen : false
		};
	},

	handleClick: function(event) {
		this.setState({
			chosen : !this.state.chosen
		});
	},

	updateQuestion: function(event) {
	},

	render: function() {
		var choiceClassName = "c-question-choices--option";
		var iconActive = " ";

		if (this.state.chosen) {
			choiceClassName += " is-active";
			iconActive += "is-active";
			this.props.value = "checked";
		}

		return (
			<div className={choiceClassName} onClick={this.handleClick}>
				<input name={"q_" + this.props.questionNumber} value={this.props.value} type="radio"/>
				<label className="">
					<span className="c-radioInputNumber">1</span>
					{this.props.label}
				</label>
				<IconChoice active={iconActive} />
			</div>
		)
	}
});

module.exports = Answer;
