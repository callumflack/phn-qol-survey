import React from 'react'
import classNames from 'classnames'
import NavLogo from '../ui-Elements/NavLogo.js'
import CloseButton from '../ui-Elements/CloseButton.js'

module.exports = React.createClass({
	displayName: 'Modal',
    propTypes: {
		className: React.PropTypes.string.isRequired,
        children: React.PropTypes.element.isRequired,
		isOpen: React.PropTypes.bool,
	},
	handleClose: function() {
		// Switching this off... Instead we'll be redirecting home.
		//this.props.closeScoreHandler();
		window.location = '/';
	},
	render: function () {
		var componentClasses = classNames({
			'Modal': true,
			// 'is-active': this.props.scoreOpen
			'is-active': true
		});

		return (
			<div className={componentClasses} tabindex="-1" role="dialog" aria-labelledby="">
				<div className="Modal-dialog" role="document">
					<div className="Modal-content">

						<NavLogo />
						<CloseButton label="Finish" modalCloseFunction={this.handleClose} />

                        <main className="o-content u-marginT5" role="main" >
                            <div className="o-container">
                                {this.props.children}
        					</div>
    					</main>

					</div>
				</div>
			</div>
		);
	}
});
