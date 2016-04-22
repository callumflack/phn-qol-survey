var React = require("react");
var IcAvatar = require('../ui-Icons/Icons.js').IcAvatar;
var IcDownload = require('../ui-Icons/Icons.js').IcDownload;

var AdminForm = React.createClass({
	render: function () {
		return (
			<form className="u-marginT" id="" action="" method="post" name="registration-form">
				<div className="Form-group">
					<label for=""></label>
					<input className="Form-control" id="" type="text" value="" name="" placeholder="Username" required />
				</div>
				<div className="Form-group">
					<label for=""></label>
					<input className="Form-control" id="" type="text" value="" name="" placeholder="Password" required />
				</div>
				<div className="Form-group u-textCenter u-marginT2">
					<button className="Button t-button t-button--lg" type="submit" value="" name="">
						<IcAvatar align="left" />Log in
					</button>
				</div>
			</form>
		);
	}
});

module.exports = AdminForm;
