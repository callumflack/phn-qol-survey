var React = require('react');
var SurveyProgress = require('./SurveyProgress.js');
var BtnRegister = require('../ui-Buttons/NavButtons.js').BtnRegister;
var BtnLocation = require('../ui-Buttons/NavButtons.js').BtnLocation;
var BtnLogout = require('../ui-Buttons/NavButtons.js').BtnLogout;

var Nav = React.createClass({
	render: function() {
		return (
			<header className="c-header" role="header">
				<nav className={"c-nav c-nav--" + this.props.details}>
					<a className="c-nav-home" href="#"><img src="images/NQPHN.png" alt="" /></a>
					<SurveyProgress />
					<a className="c-nav-status" href="#device-registration">
						<BtnLocation location="Aurukun" />
					</a>
				</nav>
			</header>
		);
	}
});

module.exports = Nav;
