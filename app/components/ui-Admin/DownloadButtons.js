var React = require("react");
var IcAvatar = require('../ui-Elements/Icons.js').IcAvatar;
var IcDownload = require('../ui-Elements/Icons.js').IcDownload;

var DownloadButtons = React.createClass({
	render: function () {
		return (
			<div className="u-textCenter">
				<button className="Button t-button t-button--full" type="submit" value="" name="">
					<IcDownload align="left" />Download
				</button>
			</div>

		);
	}
});

module.exports = DownloadButtons;
