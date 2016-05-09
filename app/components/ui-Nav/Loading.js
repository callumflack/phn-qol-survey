var React = require("react");
var classNames = require('classnames');
var NavLogo = require('../ui-Elements/NavLogo.js');
var LoadingAnimation = require('../ui-Elements/LoadingAnimation.js');

var Loading = React.createClass({
	render: function () {
		var modalClasses = classNames({
			'Modal': true,
			'is-active': false
		});

		return (
			<div className={modalClasses} tabindex="-1" role="dialog" aria-labelledby="">
				<div className="Modal-dialog u-marginT0" role="document">
					<div className="Modal-content">
						<NavLogo />

						<main className="o-content u-marginT0" role="main" deviceRegistered={this.props.deviceRegistered}>
							<div className="o-container">
								<div className="u-flex u-flexAlignItemsCenter u-fullViewportHeight">
									<div className="Grid-cell--center">
										<LoadingAnimation />
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

module.exports = Loading;
