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

	/* @Kashi: this is here for you to… :) */
	updateQuestion: function(event) {
	},

	render: function() {
		var choiceClassName = classNames({
			'c-question-choices--option': true
		});

		var iconActive = classNames({
			'is-active': this.state.chosen
		});

		return (
			<select className="t-selectInputs" name="">
				<option value={this.props.value} label={this.props.label}>{this.props.label}</option>
			</select>
		)
	}
});

module.exports = Answer;
