var React = require("react");
var classNames = require('classnames');
var ShareScore = require('./ShareScore.js');
var CloseButton = require('../ui-Buttons/CloseButton.js');
var IcReturn = require('../ui-Icons/Icons.js').IcReturn;

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

						<a className="c-nav-home" href="#"><img src="images/NQPHN.png" alt="" /></a>
						<CloseButton modalCloseFunction={this.closeScoreHandler} />

						<main className="o-content u-marginT5" role="main" deviceRegistered={this.props.deviceRegistered}>
							<div className="o-container">

								<h1 className="c-delimit u-headline">
									<div className="c-delimit-rule"></div>
									<span className="c-delimit-block">Your score</span>
								</h1>

								<div className="c-chart">
									<div className="Grid Grid--withGutter">
										<div className="Grid-cell u-size1of4">
											<div className="c-chart-bar">
												<div className="c-chart-indicator" style={amounts[0].style}>
													 {amounts[0].magnitude}<span>%</span>
												</div>
											</div>
											<h2 className="c-chart-label">Physical</h2>
										</div>
										<div className="Grid-cell u-size1of4">
											<div className="c-chart-bar">
												<div className="c-chart-indicator" style={amounts[1].style}>
													{amounts[1].magnitude}<span>%</span>
												</div>
											</div>
											<h2 className="c-chart-label">Physical</h2>
										</div>
										<div className="Grid-cell u-size1of4">
											<div className="c-chart-bar">
												<div className="c-chart-indicator" style={amounts[2].style}>
													{amounts[2].magnitude}<span>%</span>
												</div>
											</div>
											<h2 className="c-chart-label">Physical</h2>
										</div>
										<div className="Grid-cell u-size1of4">
											<div className="c-chart-bar">
												<div className="c-chart-indicator" style={amounts[3].style}>
													{amounts[3].magnitude}<span>%</span>
												</div>
											</div>
											<h2 className="c-chart-label">Physical</h2>
										</div>

									</div>
								</div>


								<div className="u-well">
									<h3 className="u-headlineSm--light u-textCenter u-marginBD1">Share your score by email or SMS</h3>
									<div className="u-size9of12 Grid-cell--center">
										<ShareScore />
									</div>
								</div>

								<p className="u-textCenter u-marginT">
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
