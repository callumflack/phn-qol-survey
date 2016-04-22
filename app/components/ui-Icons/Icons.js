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

var IconChoice = React.createClass({
	render: function() {
		return (
			<svg className={"Icon Icon--buttonAlign Icon--" + this.props.align} viewBox="0 0 24 24" aria-labelledby="title">
				<title id="title">Question Chosen Icon</title>
				<path d="M0 0h24v24H0z" fill="none"/>
				<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
			</svg>
		);
	}
});

var IconSubmit = React.createClass({
	render: function() {
		return (
			<svg className={"Icon Icon--buttonAlign Icon--" + this.props.align} viewBox="0 0 24 24" aria-labelledby="title">
				<title id="title">Survey complete icon</title>
				<path d="M0 0h24v24H0z" fill="none"/>
				<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
			</svg>
		);
	}
});

var IconDownload = React.createClass({
	render: function() {
		return (
			<svg className={"Icon Icon--buttonAlign Icon--" + this.props.align} viewBox="0 0 24 24" aria-labelledby="title">
				<title id="title">Download icon</title>
				<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
				<path d="M0 0h24v24H0z" fill="none"/>
			</svg>
		);
	}
});

var IconClose = React.createClass({
	render: function() {
		return (
			<svg className={"Icon Icon--buttonAlign Icon--" + this.props.size} viewBox="0 0 24 24" aria-labelledby="title">
				<title id="title">Close icon</title>
				<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" stroke="white" stroke-width="20"/>
				<path d="M0 0h24v24H0z" fill="none"/>
			</svg>
		);
	}
});

module.exports = {
	IcSettings: IconSettings,
	IcAvatar: IconAvatar,
	IcChoice: IconChoice,
	IcSubmit: IconSubmit,
	IcDownload: IconDownload,
	IcClose: IconClose
}
