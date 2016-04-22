var React = require('react');
var BtnRegister = require('../ui-Buttons/NavButtons.js').BtnRegister;
var BtnLocation = require('../ui-Buttons/NavButtons.js').BtnLocation;
var BtnLogout = require('../ui-Buttons/NavButtons.js').BtnLogout;

var SurveyProgressIndicator = React.createClass({
	render: function() {
		return (
			<div>
				<div className="c-surveyProgress-indicatorBase">
					<div className="c-surveyProgress-indicator"></div>
				</div>
			</div>
		);
	}
});

module.exports = SurveyProgressIndicator;
