var React = require("react");
var IcAvatar = require('../ui-Elements/Icons.js').IcAvatar;
var IcDownload = require('../ui-Elements/Icons.js').IcDownload;

var DownloadButtons = React.createClass({
	render: function () {
		return (
			<div>
				<div className="u-textCenter">
					<button className="Button t-button t-button--full" type="submit" value="" onClick={this.props.downloadData} name="">
						<IcDownload align="left" />Survey data
					</button>
				</div>
			</div>

		);
	}
});

module.exports = DownloadButtons;
