var React = require('react');
var classNames = require('classnames');
var IconChoice = require('../ui-Icons/Icons.js').IcChoice;

var Answer = React.createClass({
	handleClick: function(event) {
		this.props.updateAnswers(this.props.value);
	},
	render: function() {
		var choiceClassName = classNames({
			'c-question-choices--option': true,
			'is-active': this.props.selected
		});

		var iconActive = classNames({
			'is-active': this.props.selected
		});

		this.props.activate = this.activate;
		this.props.deactivate = this.deactivate;

		return (
			<div className={choiceClassName} onClick={this.handleClick}>
				<input name={"q_" + this.props.questionNumber} value={this.props.number} type="radio" checked={this.props.selected}/>
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
