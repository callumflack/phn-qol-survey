var React = require("react");
var classNames = require('classnames');
var CloseButton = require('../ui-Elements/CloseButton.js');

// Modal
var LogOutModal = React.createClass({
	closeModal: function() {
		this.props.closeModal();
	},
	render: function () {
		var modalClasses = classNames({
			'Modal': true,
			'is-active': this.props.logoutOpen
		});

		return (
			<div className={modalClasses} tabindex="-1" role="dialog" aria-labelledby="">
				<div className="Modal-dialog" role="document">
					<div className="Modal-content">

						<CloseButton modalCloseFunction={this.closeModal} />

						<main className="o-content" role="main">
							<div className="o-container">

								<h1 className="u-textMd u-textWtMd u-textCenter">
									You're logged in as an Administrator.<br />
								<span className="u-textWtLt">Are you sure you want to log out?</span>
								</h1>

								<p className="u-textCenter u-marginT15">
									<button className="Button t-button--brand t-button--md u-marginR" onClick={this.closeModal} type="submit">No</button>
									<button className="Button t-button--rev t-button--md u-colorBrand" onClick={this.props.logout} type="submit">Yes</button>
								</p>

							</div>
						</main>

					</div>
				</div>
			</div>
		);
	}
});

module.exports = LogOutModal;
