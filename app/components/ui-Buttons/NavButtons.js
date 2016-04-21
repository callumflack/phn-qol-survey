var React = require('react');
var IcSettings = require('../ui-Icons/Icons.js').IcSettings;
var IcAvatar = require('../ui-Icons/Icons.js').IcAvatar;

var ButtonRegister = React.createClass({
	render: function(props) {
		return (
			<button className="Button t-buttonSecondary">
				<IcSettings align="left" />
				Register device
			</button>
		);
	}
});

var ButtonLocation = React.createClass({
	render: function(props) {
		return (
			<button className="Button t-buttonInvisible">
				{this.props.location}
				<IcSettings align="right" />
			</button>
		);
	}
});

var ButtonLogout = React.createClass({
	render: function(props) {
		return (
			<button className="Button t-buttonInvisible">
				Logo out
				<IcAvatar align="right" />
			</button>
		);
	}
});

module.exports = {
	BtnRegister: ButtonRegister,
	BtnLocation: ButtonLocation,
	BtnLogout: ButtonLogout
}
