var React = require("react");
var IcSubmit = require('../ui-Icons/Icons.js').IcSubmit;

var Submit = React.createClass({
	render: function() {
		return (
			<div className="c-delimit u-textCenter u-marginT4 u-marginBL">
				<p className="u-textMd u-textWtMd u-colorBrandAlt u-textCenter u-marginBD6">That was easy wasn't it?</p>
				<p className="u-textMd u-colorBrandAlt u-textCenter u-marginB15">Now on to the second part.</p>
				<div className="c-delimit-rule c-delimit-rule--active"></div>
				<span className="c-delimit-block">
					<button className="Button t-button" name="button" type="submit" value="Submit survey">
						<IcSubmit align="left" />
						Start the survey
					</button>
				</span>
			</div>
		)
	}
});

module.exports = Submit;
