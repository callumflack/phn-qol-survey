var React = require("react");
var classNames = require('classnames');

var Loading = React.createClass({
	render: function () {
		var modalClasses = classNames({
			'Modal': true,
			'is-active': false
		});

		return (
			<div className={modalClasses} tabindex="-1" role="dialog" aria-labelledby="">
				<div className="Modal-dialog" role="document">
					<div className="Modal-content">

						<main className="o-content u-mxs-marginT4" role="main" deviceRegistered={this.props.deviceRegistered}>
							<div className="o-container">
								<div className="u-size9of12 Grid-cell--center">
									<p className="u-textMd u-textWtMd u-textCenter">Loading…</p>
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
