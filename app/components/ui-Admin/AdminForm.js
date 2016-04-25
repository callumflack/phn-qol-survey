var React = require("react");
var IcAvatar = require('../ui-Icons/Icons.js').IcAvatar;
var IcDownload = require('../ui-Icons/Icons.js').IcDownload;

var AdminForm = React.createClass({
	render: function () {
		return (
			<form className="" id="" action="" method="post" name="registration-form">
				<div className="Form-group">
					<label for="username">Username</label>
					<input className="Form-control" id="username" type="text" name="" placeholder="" required />
				</div>
				<div className="Form-group">
					<label for="password">Password</label>
					<input className="Form-control" id="password" type="text" name="" placeholder="" required />
				</div>
				<div className="Form-group u-textCenter u-marginT15">
					<button className="Button t-button t-button--full" type="submit" value="" name="">
						<IcAvatar align="left" />Log in
					</button>
				</div>
			</form>
		);
	}
});

module.exports = AdminForm;
