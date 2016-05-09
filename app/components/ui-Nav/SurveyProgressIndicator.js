var React = require('react');
var BtnRegister = require('../ui-Elements/NavButtons.js').BtnRegister;
var BtnLocation = require('../ui-Elements/NavButtons.js').BtnLocation;
var BtnLogout = require('../ui-Elements/NavButtons.js').BtnLogout;

const QUESTIONS_TOTAL = 26;

var SurveyProgressIndicator = React.createClass({
	render: function() {
		var progressStyle = {
			width: (this.props.questionsAnswered / QUESTIONS_TOTAL) * 100 + '%'
		};
		
		console.log(this.props.questionsAnswered);
		return (
			<div>
				<div className="c-surveyProgress-indicatorBase">
					<div className="c-surveyProgress-indicator" style={progressStyle}></div>
				</div>
			</div>
		);
	}
});

module.exports = SurveyProgressIndicator;
