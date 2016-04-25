var React = require('react');
var SurveyProgress = require('./SurveyProgress.js');
var BtnRegister = require('../ui-Buttons/NavButtons.js').BtnRegister;
var BtnLocation = require('../ui-Buttons/NavButtons.js').BtnLocation;
var BtnLogout = require('../ui-Buttons/NavButtons.js').BtnLogout;

var Nav = React.createClass({
	render: function() {
		{/*var headerClasses = classNames({
			'Modal': true,
			'is-active': false,
		});*/}

		return (
			<header className={"c-header is-" + this.props.showProgress} role="header">
				<nav className="c-nav">
					<a className="c-nav-home" href="#"><img src="images/NQPHN.png" alt="" /></a>
					<a className="c-nav-status" href="#registration">
						{/*<BtnLocation location="Aurukun" />*/}
						<BtnRegister />
					</a>
				</nav>

				<SurveyProgress display="block" />

			</header>
		);
	}
});

module.exports = Nav;
