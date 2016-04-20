var React = require('react');
// require('./stylesheets/module.icon.scss');

// Refs
// http://stackoverflow.com/questions/32230635/passing-in-class-names-to-react-components
// http://stackoverflow.com/questions/30762734/multiple-react-components-in-a-single-module

var IconSettings = React.createClass({
	render: function(props) {
		return (
			<svg className={"Icon Icon--buttonAlign Icon--" + this.props.align} viewBox="0 0 24 24" aria-labelledby="title">
				<title id="title">Settings Icon</title>
				<path d="M0 0h24v24H0z" fill="none"/>
				<path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
			</svg>
		);
	}
});

var IconAvatar = React.createClass({
	render: function() {
		return (
			<svg className={"Icon Icon--buttonAlign Icon--" + this.props.align} viewBox="0 0 24 24" aria-labelledby="title">
				<title id="title">Avatar Icon</title>
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
				<path d="M0 0h24v24H0z" fill="none"/>
			</svg>
		);
	}
});

module.exports = {
	IcSettings: IconSettings,
	IcAvatar: IconAvatar,
}
