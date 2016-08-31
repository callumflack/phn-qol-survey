var React = require("react");
var classNames = require('classnames');
var IcSuccess = require('../ui-Elements/Icons.js').IcSuccess;

module.exports = React.createClass({
	displayName: 'ShareFeedback',

	render() {
		let formClasses = classNames(
				'Form',
				'Form--sm',
				// 'u-xs-flex',
				'u-mxs-marginT'
				// {'is-active': this.state.emailInputVisibile,
				// 'has-error': this.state.emailInvalid,
				// 'is-pending': this.state.emailPending,
				// 'is-successful': this.state.emailSent}
			),
			formGroupClasses = classNames(
				'Form-group'
				// 'u-xs-paddingRD1',
				// 'u-marginBD1'
				// {'is-active': this.state.emailInputVisibile}
			),
			formLoadingClasses = classNames(
				'Form-loadingWrapper'
				// {'is-active': this.state.emailPending,
				// 'u-colorBrandAlt': this.state.emailPending}
			);

		return (
			<form
				className={formClasses}
				method="post"
				name="ShareFeedback"
				onSubmit="">

                <div className="u-xs-flex u-flexRow">
    				<div className={formGroupClasses + " u-xs-paddingRD1"} onClick="">
    					<label for="input">Your first name</label>
    					<input
    						className="Form-control"
    						id=""
    						type="text"
    						name="firstName"
    						placeholder=""
    						onFocus=""
    						onBlur=""
    						ref=""
    						disabled=""
    						required />
    				</div>
    				<div className={formGroupClasses} onClick="">
    					<label for="input">Your last name</label>
    					<input
    						className="Form-control"
    						id=""
    						type="text"
    						name="lastName"
    						placeholder=""
    						onFocus=""
    						onBlur=""
    						ref=""
    						disabled=""
    						required />
    				</div>
				</div>

				<div className={formGroupClasses + " u-mxs-marginT"} onClick="">
					<label for="input">Your email</label>
					<input
						className="Form-control"
						id=""
						type="email"
						name="email"
						placeholder=""
						onFocus=""
						onBlur=""
						ref=""
						disabled=""
						required />
				</div>

				<div className={formGroupClasses + " u-marginT15"} onClick="">
					<textarea
						className="Form-control"
						id=""
                        rows="4"
						type="text"
						name="feedback"
						placeholder="Your thoughts"
						onFocus=""
						onBlur=""
						ref=""
						disabled=""
						required />
				</div>

				<div className="Form-group u-flexExpandLeft u-textRight" style={{ height: 39 }}>
    				<div className="u-xs-floatRight u-xs-posRelative">
    					<input
    						className="Button t-button--full t-xs-button--md t-buttonSecondary--counter"
    						type="submit"
                            name=""
    						value="Send"
    						disabled="" />
                        <span className={formLoadingClasses}><div className="sk-spinner-pulse"></div></span>
    				</div>
				</div>
			</form>
		);
	}
});
