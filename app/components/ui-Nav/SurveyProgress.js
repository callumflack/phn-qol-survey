var React = require('react');
var BtnRegister = require('../ui-Elements/NavButtons.js').BtnRegister;
var BtnLocation = require('../ui-Elements/NavButtons.js').BtnLocation;
var BtnLogout = require('../ui-Elements/NavButtons.js').BtnLogout;
var SurveyProgressIndicator = require('./SurveyProgressIndicator.js');

var SurveyProgress = React.createClass({
	render: function() {
		return (
			<div className="c-surveyProgressWrapper">
				<div className="u-posAbsoluteCenter u-flex">
					<div className="o-container o-container--specWidth u-flex">
						<div className="u-flex u-xs-flexAlignItemsCenter u-sizeFill">
							<div className="c-surveyProgress">
								<p className="c-surveyProgress-score">
									<span>{this.props.questionsAnswered} of 26 answered</span>
									<a className="c-surveyProgress-cancel" href="#">Cancel this survey</a>
								</p>

								<SurveyProgressIndicator
									questionsAnswered={this.props.questionsAnswered}
								/>

							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = SurveyProgress;
