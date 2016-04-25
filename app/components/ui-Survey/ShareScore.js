var React = require("react");
var classNames = require('classnames');

var ShareScore = React.createClass({
	render: function () {
		return (
			<div>
			<form className="u-flex" id="" action="" method="post" name="ShareScore-form">
				<div className="Form-group Form-group--sm u-flexGrow1 u-paddingRD1 u-marginBD3">
					<label for="input">Add an email</label>
					<input className="Form-control" id="input" type="text" name="" placeholder="" required />
				</div>
				<div className="Form-group u-flexExpandLeft">
					<input className="Button t-buttonSecondary t-button--md u-colorBrandCount" type="submit" value="Send" name="" />
				</div>
			</form>
			<form className="u-flex u-marginTD2" id="" action="" method="post" name="ShareScore-form">
				<div className="Form-group Form-group--sm u-flexGrow1 u-paddingRD1 u-marginBD3">
					<label for="input">And/or add a mobile number</label>
					<input className="Form-control" id="input" type="text" name="" placeholder="" required />
				</div>
				<div className="Form-group u-flexExpandLeft">
					<input className="Button t-buttonSecondary t-button--md u-colorBrandCount" type="submit" value="Send" name="" />
				</div>
			</form>
			</div>

		);
	}
});

module.exports = ShareScore;
