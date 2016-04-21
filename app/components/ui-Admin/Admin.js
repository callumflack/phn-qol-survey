var React = require("react");
var Nav = require("../ui-Nav/Nav.js");
var IcAvatar = require('../ui-Icons/Icons.js').IcAvatar;
var IcDownload = require('../ui-Icons/Icons.js').IcDownload;

require('./../../stylesheets/app.scss');

var Admin = React.createClass({
	render: function () {
		return (
			<div>
				<Nav />
				<main className="o-content" role="main">
					<div className="o-container">

						<h1 className="c-delimit u-headline">
							<div className="c-delimit-rule"></div>
							<span className="c-delimit-block">
								<span className="u-textEmMd">Quality of Life</span> survey data
							</span>
						</h1>

						<p className="u-textMd u-textCenter">Download a CSV spreadsheet of survey submissions from all registered devices in the last day.</p>

						<p className="u-textCenter u-marginT2">
							<button className="Button t-button t-button--lg">
								<IcAvatar align="left" />Log in
							</button>
						</p>

						<form action="" method="post" id="" name="admin-login-form" class="validate" target="_blank" novalidate>
							<div class="Form-group">
								<label for="username">Username</label>
								<input class="Form-control required" id="" type="" value="" name="" placeholder="" required></input>
							</div>
							<div class="Form-group">
								<label for="username">Password</label>
								<input class="Form-control required" id="" type="" value="" name="" placeholder="" required></input>
							</div>
							<div class="Form-group">
								<button className="Button t-button t-button--lg" type="submit" value="" name="">
									<IcDownload align="left" />Download
								</button>
							</div>
						</form>

					</div>
				</main>
			</div>
		);
	}
});

module.exports = Admin;
