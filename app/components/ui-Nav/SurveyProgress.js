var React = require('react');
var BtnRegister = require('../ui-Buttons/NavButtons.js').BtnRegister;
var BtnLocation = require('../ui-Buttons/NavButtons.js').BtnLocation;
var BtnLogout = require('../ui-Buttons/NavButtons.js').BtnLogout;
var SurveyProgressIndicator = require('./SurveyProgressIndicator.js');

var SurveyProgress = React.createClass({
	render: function() {
		return (
			<div className={"c-surveyProgressWrapper u-" + this.props.display}>
				<div className="u-posAbsoluteCenter u-flex">
					<div className="o-container o-container--specWidth u-flex">
						<div className="u-flex u-flexAlignItemsCenter u-sizeFill">
							<div className="c-surveyProgress">
								<p className="c-surveyProgress-score">
									<span>0 of 26 answered</span>
									<a className="c-surveyProgress-cancel" href="#cancel-survey">Cancel this survey</a>
								</p>

								<SurveyProgressIndicator />

							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = SurveyProgress;
