var React = require('react');
var IcSettings = require('./Icons.js').IcSettings;
var IcAvatar = require('./Icons.js').IcAvatar;

// https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d#.m8u4jzys8
const ButtonRegister = (props) =>
	<button className="Button t-buttonSecondary--complement">
		<IcSettings left={true} />
		Register
	</button>;

var ButtonLocation = React.createClass({
	render: function(props) {
		return (
			<button className="Button t-buttonInvisible">
				{this.props.location}
				<IcSettings right={true} />
			</button>
		);
	}
});

var ButtonLogout = React.createClass({
	render: function(props) {
		return (
			<button className="Button t-buttonInvisible">
				Log out
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
