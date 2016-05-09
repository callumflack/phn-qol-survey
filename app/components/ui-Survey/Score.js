var React = require("react");
var classNames = require('classnames');
var ShareScore = require('./ShareScore.js');
var CloseButton = require('../ui-Elements/CloseButton.js');
var IcReturn = require('../ui-Elements/Icons.js').IcReturn;

var Score = React.createClass({
	randomGraph: function() {
		var amount = 34 + Math.round(Math.random()*20),
			properties = {
				style: { height: amount + "%" },
				magnitude: amount
			}
		return properties;
	},
	closeScoreHandler: function() {
		this.props.closeScoreHandler();
	},
	render: function () {
		var modalClasses = classNames({
			'Modal': true,
			'is-active': this.props.scoreOpen,
		});

		var amounts = [
			this.randomGraph(),
			this.randomGraph(),
			this.randomGraph(),
			this.randomGraph()
		];

		return (
			<div className={modalClasses} tabindex="-1" role="dialog" aria-labelledby="">
				<div className="Modal-dialog" role="document">
					<div className="Modal-content">

						<span className="c-nav-home" href="#"><img src="images/NQPHN.png" alt="" /></span>
						<CloseButton modalCloseFunction={this.closeScoreHandler} />

						<main className="o-content u-marginT5" role="main" deviceRegistered={this.props.deviceRegistered}>
							<div className="o-container">

								<h1 className="c-delimit u-headline">
									<div className="c-delimit-rule"></div>
									<span className="c-delimit-block">Your score</span>
								</h1>

								<div className="c-chart">
									<div className="Grid Grid--withGutter">
										<div className="Grid-cell u-size1of2 u-xs-size1of4">
											<div className="c-chart-bar">
												<div className="c-chart-indicator" style={amounts[0].style}>
													<span className="c-chart-indicatorScore">
														{amounts[0].magnitude}
														<span className="c-chart-indicatorMark">%</span>
													</span>
												</div>
											</div>
											<h2 className="c-chart-label">Physical health</h2>
										</div>
										<div className="Grid-cell u-size1of2 u-xs-size1of4">
											<div className="c-chart-bar">
												<div className="c-chart-indicator" style={amounts[1].style}>
													<span className="c-chart-indicatorScore">
														{amounts[1].magnitude}
														<span className="c-chart-indicatorMark">%</span>
													</span>
												</div>
											</div>
											<h2 className="c-chart-label">Psychological</h2>
										</div>
										<div className="Grid-cell u-size1of2 u-xs-size1of4">
											<div className="c-chart-bar">
												<div className="c-chart-indicator" style={amounts[2].style}>
													<span className="c-chart-indicatorScore">
														{amounts[2].magnitude}
														<span className="c-chart-indicatorMark">%</span>
													</span>
												</div>
											</div>
											<h2 className="c-chart-label">Social relationships</h2>
										</div>
										<div className="Grid-cell u-size1of2 u-xs-size1of4">
											<div className="c-chart-bar">
												<div className="c-chart-indicator" style={amounts[3].style}>
													<span className="c-chart-indicatorScore">
														{amounts[3].magnitude}
														<span className="c-chart-indicatorMark">%</span>
													</span>
												</div>
											</div>
											<h2 className="c-chart-label">Environment</h2>
										</div>

									</div>
								</div>

								<div className="u-well">
									<h3 className="u-headlineSm--light u-textCenter u-marginBD1">Share your score by email or SMS</h3>
									<div className="u-size9of12 Grid-cell--center">
										<ShareScore />
									</div>
								</div>

								<p className="u-textCenter u-marginT u-marginB2">
									<a className="u-textXs--light" href="/"><IcReturn align="left" />Do another survey</a>
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
