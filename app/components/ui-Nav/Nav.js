var React = require('react');
var SurveyProgress = require('./SurveyProgress.js');
var BtnRegister = require('../ui-Buttons/NavButtons.js').BtnRegister;
var BtnLocation = require('../ui-Buttons/NavButtons.js').BtnLocation;
var BtnLogout = require('../ui-Buttons/NavButtons.js').BtnLogout;

var Nav = React.createClass({
	regClick: function() {
		if ( ! this.props.deviceRegistered)
			this.props.toggleRegistration();
	},
	render: function() {
		// {/*var headerClasses = classNames({
		// 	'Modal': true,
		// 	'is-active': false,
		// });*/}

		var buttonToShow = undefined;
		var surveyShowsProgress = undefined;

		if ( ! this.props.deviceRegistered) {
			buttonToShow = (<BtnRegister />);
			surveyShowsProgress = " ";
		} else {
			buttonToShow = (<BtnLocation location={this.props.region} />);
			surveyShowsProgress = (<SurveyProgress />);
		}

		return (
			<header className={"c-header is-" + this.props.showProgress} role="header">
				<nav className="c-nav">
					<a className="c-nav-home" href="#"><img src="images/NQPHN.png" alt="" /></a>
					<a className="c-nav-status" onClick={this.regClick}>
						{buttonToShow}
					</a>
				</nav>

				{surveyShowsProgress}

			</header>
		);
	}
});

module.exports = Nav;
