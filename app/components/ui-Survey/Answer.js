var React = require('react');
var classNames = require('classnames');
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

	/* @Kashi: this is here for you to…*/
	updateQuestion: function(event) {
	},

	render: function() {
		var choiceClassName = classNames({
			'c-question-choices--option': true,
			'is-active': this.state.chosen
		});

		var iconActive = classNames({
			'is-active': this.state.chosen
		});

		return (
			<div className={choiceClassName} onClick={this.handleClick}>
				<input name={"q_" + this.props.questionNumber} value={this.props.number} type="radio"/>
				<label className="">
					<span className="c-radioInputNumber">{this.props.number + 1}</span>
					{this.props.label}
				</label>
				<IconChoice active={iconActive} />
			</div>
		)
	}
});

module.exports = Answer;
