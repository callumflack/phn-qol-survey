var React = require('react');
var IcSettings = require('./Icon.js').IcSettings;
var IcAvatar = require('./Icon.js').IcAvatar;

var Nav = React.createClass({
	render: function() {
		return (
			<header className="c-header" role="header">
				<nav className="c-nav">
					<a className="c-nav-home" href="#"><img src="images/NQPHN.png" alt="" /></a>
					<a className="c-nav-register" href="#device-registration">
						<button className="Button t-buttonSecondary">
							<IcSettings align="left" />
							Register device
						</button>
					</a>
				</nav>
			</header>
		);
	}
});

module.exports = Nav;
