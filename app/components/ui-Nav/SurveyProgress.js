var React = require('react');
var BtnRegister = require('../ui-Buttons/NavButtons.js').BtnRegister;
var BtnLocation = require('../ui-Buttons/NavButtons.js').BtnLocation;
var BtnLogout = require('../ui-Buttons/NavButtons.js').BtnLogout;

var SurveyProgress = React.createClass({
	render: function() {
		return (
			<div className="o-container">
				<div className="c-surveyProgress">
					<p className="c-surveyProgress-score">
						<span>0 of 26 answered</span>
						<a href="#cancel-survey"><span className="u-textWgLt u-marginLD3">|</span> Cancel this survey</a>
					</p>
					<div className="c-surveyProgress-indicator"></div>
				</div>
			</div>
		);
	}
});

module.exports = SurveyProgress;
