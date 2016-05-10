var React = require("react");
var classNames = require('classnames');
var ShareScore = require('./ShareScore.js');
var CloseButton = require('../ui-Elements/CloseButton.js');
var IcReturn = require('../ui-Elements/Icons.js').IcReturn;
var NavLogo = require('../ui-Elements/NavLogo.js');

var Score = React.createClass({
	getDefaultProps: function() {
		var graphValue = function(value) {
			var amount = value * 20,
				properties = {
					style: { height: (amount + "%") },
					magnitude: amount
				}
			return properties;
		};

		return {
			physicalScore: graphValue(0),
			psychologocialScore: graphValue(0),
			socialScore: graphValue(0),
			environmentScore: graphValue(0)
		}
	},
	setScores: function(scores) {
		this.props.physicalScore = this.graphValue(scores.physical);
		this.props.psychologocialScore = this.graphValue(scores.psychologocial);
		this.props.socialScore = this.graphValue(scores.social);
		this.props.environmentScore = this.graphValue(scores.environment);
	},
	/**
	 * A lightweight object pairing the CSS style property (height) with the
	 * numeric magnitude for the graph.
	 */
	graphValue: function(value) {
		var amount = value * 20,
			properties = {
				style: { height: (amount + "%") },
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
										<div className="Grid-cell u-size1of2 u-xs-size1of4">
											<div className="c-chart-bar">
												<div className="c-chart-indicator" style={this.props.physicalScore.style}>
													<span className="c-chart-indicatorScore">
														{this.props.physicalScore.magnitude}
														<span className="c-chart-indicatorMark">%</span>
													</span>
												</div>
											</div>
											<h2 className="c-chart-label">Physical health</h2>
										</div>
										<div className="Grid-cell u-size1of2 u-xs-size1of4">
											<div className="c-chart-bar">
												<div className="c-chart-indicator" style={this.props.psychologocialScore.style}>
													<span className="c-chart-indicatorScore">
														{this.props.psychologocialScore.magnitude}
														<span className="c-chart-indicatorMark">%</span>
													</span>
												</div>
											</div>
											<h2 className="c-chart-label">Psychological</h2>
										</div>
										<div className="Grid-cell u-size1of2 u-xs-size1of4">
											<div className="c-chart-bar">
												<div className="c-chart-indicator" style={this.props.socialScore.style}>
													<span className="c-chart-indicatorScore">
														{this.props.socialScore.magnitude}
														<span className="c-chart-indicatorMark">%</span>
													</span>
												</div>
											</div>
											<h2 className="c-chart-label">Social relationships</h2>
										</div>
										<div className="Grid-cell u-size1of2 u-xs-size1of4">
											<div className="c-chart-bar">
												<div className="c-chart-indicator" style={this.props.environmentScore.style}>
													<span className="c-chart-indicatorScore">
														{this.props.environmentScore.magnitude}
														<span className="c-chart-indicatorMark">%</span>
													</span>
												</div>
											</div>
											<h2 className="c-chart-label">Environment</h2>
										</div>

									</div>
								</div>

								<div className="u-well">
									<h3 className="u-headlineSm--light u-textCenter u-marginBD1">Get your score by email or SMS</h3>
									<div className="u-size9of12 Grid-cell--center">
										<ShareScore />
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
