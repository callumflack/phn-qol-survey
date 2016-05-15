var React = require("react");
var classNames = require('classnames');
var ShareScore = require('./ShareScore.js');
var CloseButton = require('../ui-Elements/CloseButton.js');
var IcReturn = require('../ui-Elements/Icons.js').IcReturn;
var NavLogo = require('../ui-Elements/NavLogo.js');
var ChartColumn = require('./ChartColumn.js');

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
		this.props.closeScoreHandler();
	},
	render: function () {
		var modalClasses = classNames({
			'Modal': true,
			'is-active': this.props.scoreOpen,
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
										/>
										<ChartColumn
											key="2"
											label="Psychological"
											magnitude={this.props.psych}
										/>
										<ChartColumn
											key="3"
											label="Social relationships"
											magnitude={this.props.social}
										/>
										<ChartColumn
											key="4"
											label="Environment"
											magnitude={this.props.environment}
										/>

									</div>
								</div>

								<div className="u-well">
									<h3 className="u-headlineSm--light u-textCenter u-marginB15">Get your score by email or SMS</h3>
									<div className="u-size9of12 Grid-cell--center">
										<ShareScore
											sendEmail={this.props.sendEmail}
											sendSms={this.props.sendSms}
										/>
									</div>
								</div>

								<p className="u-textCenter u-marginT2 u-marginB2">
									<a className="u-textXs--light u-textWtRg" href="/"><IcReturn align="left" />Do another survey</a>
								</p>

							</div>
						</main>

					</div>
				</div>
			</div>
		);
	}
});

module.exports = Score;
