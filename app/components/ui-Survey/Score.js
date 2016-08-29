var React = require("react");
var classNames = require('classnames');
var ShareScore = require('./ShareScore.js');
var NavLogo = require('../ui-Elements/NavLogo.js');
var ChartColumn = require('./ChartColumn.js');
var CloseButton = require('../ui-Elements/CloseButton.js');
var IcReturn = require('../ui-Elements/Icons.js').IcReturn;
var IcShare = require('../ui-Elements/Icons.js').IcShare;
var IcFeedback = require('../ui-Elements/Icons.js').IcFeedback;
var IcCloseSm = require('../ui-Elements/Icons.js').IcCloseSm;

var Score = React.createClass({
	getDefaultProps: function() {
		return {
			deviceRegistered: true,
			physical: undefined,
			psych: undefined,
			social: undefined,
			environment: undefined
		}
	},
	closeScoreHandler: function() {
		// Switching this off... Instead we'll be redirecting home.
		//this.props.closeScoreHandler();
		window.location = '/';
	},
	render: function () {
		var modalClasses = classNames({
			'Modal': true,
			// 'is-active': this.props.scoreOpen
			'is-active': true
		});

		return (
			<div className={modalClasses} tabindex="-1" role="dialog" aria-labelledby="">
				<div className="Modal-dialog" role="document">
					<div className="Modal-content">

						<NavLogo />
						<CloseButton modalCloseFunction={this.closeScoreHandler} />

						<main className="o-content u-marginT5" role="main" deviceRegistered={this.props.deviceRegistered}>
							<div className="o-container">

								<h1 className="c-delimit u-headline">
									<div className="c-delimit-rule"></div>
									<span className="c-delimit-block">Your score</span>
								</h1>

								<div className="c-chart">
									<div className="Grid Grid--withGutter">
										<ChartColumn
											key="1"
											label="Physical"
											magnitude={this.props.physical}
											magnitudeave="44"
										/>
										<ChartColumn
											key="2"
											label="Psychological"
											magnitude={this.props.psych}
											magnitudeave="71"
										/>
										<ChartColumn
											key="3"
											label="Social relationships"
											magnitude={this.props.social}
											magnitudeave="72"
										/>
										<ChartColumn
											key="4"
											label="Environment"
											magnitude={this.props.environment}
											magnitudeave="75"
										/>

									</div>
								</div>

								<p className="u-textRg--light u-marginB15">Your score is rated across 4 domains against a randomly selected average to act as a level of comparison for our community, and to help you understand how you assess your own quality of life. <a className="u-linkUnderline" href="#">Learn more.</a>
                                </p>

								<div className="u-sm-size10of12 Grid-cell--center">
    								<div className="Grid Grid--alignCenter u-textCenter">
                                        <div className="Grid-cell u-size1of3">
                                            <button className="Button t-button--full t-buttonInvisible--caps"><IcShare size="" align="left" />Save score</button>
                                        </div>
                                        <div className="Grid-cell u-size1of3">
                                            <button className="Button t-button--full t-buttonInvisible--caps"><IcFeedback size="md" align="left" />Feedback</button>
                                        </div>
                                        <div className="Grid-cell u-size1of3">
                                            <button className="Button t-button--full t-buttonInvisible--caps"><IcCloseSm size="" align="left" />Finish</button>
                                        </div>
    								</div>
								</div>

							</div>
						</main>

					</div>
				</div>
			</div>
		);
	}
});

module.exports = Score;
