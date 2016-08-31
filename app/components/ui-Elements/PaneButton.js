var React = require("react");
var classNames = require('classnames');
var IcCloseSm = require('../ui-Elements/Icons.js').IcCloseSm;

module.exports = React.createClass({
    displayName: 'PaneButton',
    propTypes: {
        label: React.PropTypes.string,
        action: React.PropTypes.func,
        simple: React.PropTypes.bool,
        single: React.PropTypes.bool
    },
    getDefaultProps () {
		return {
			simple: 'true'
		};
	},
	action: function() {
		this.props.action();
	},
	render: function () {
        let componentClass = classNames('Button', {
            't-button--full t-buttonInvisible--caps': this.props.simple,
            't-button--fullLeft t-buttonInvisible--caps': this.props.single,
		}, this.props.className);

		return (
            <button type="button" className={componentClass} onClick={this.props.action}>
                {this.props.children}
            </button>
		);
	}
});
