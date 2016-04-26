var React = require('react');
var classNames = require('classnames');
var IconChoice = require('../ui-Icons/Icons.js').IcChoice;

var Answer = React.createClass({
	getInitialState: function() {
		return {
			chosen: undefined
		};
	},
	getDefaultProps: function() {
		return {
			activate: this.activate,
			deactivate: this.deactivate
		}
	},
	handleClick: function(event) {
		this.setState({
			chosen : true
		});
		this.props.updateAnswers(this.props.value);
	},
	activate: function() {
		this.setState({
			chosen: true
		});
	},
	deactivate: function() {
		this.setState({
			chosen : undefined
		})
	},
	render: function() {
		var choiceClassName = classNames({
			'c-question-choices--option': true,
			'is-active': this.state.chosen
		});

		var iconActive = classNames({
			'is-active': this.state.chosen
		});

		// // manipulate classes in pure JS
		// var choiceClassName = "c-question-choices--option";
		// var iconActive = " ";

		// if (this.state.chosen) {
		// 	choiceClassName += " is-active";
		// 	iconActive += "is-active";
		// 	this.props.value = "checked";
		// }

		this.props.activate = this.activate;
		this.props.deactivate = this.deactivate;

		return (
			<div className={choiceClassName} onClick={this.handleClick}>
				<input name={"q_" + this.props.questionNumber} value={this.props.number} type="radio" checked={this.state.chosen}/>
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
