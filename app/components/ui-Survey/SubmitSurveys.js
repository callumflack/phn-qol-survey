var React = require("react");
var IcSubmit = require('../ui-Icons/Icons.js').IcSubmit;

var SubmitSurveys = React.createClass({
	render: function() {
		return (
			<div className="c-delimit u-textCenter u-marginT4 u-marginBL">
				<p className="u-textMd u-textWtMd u-colorBrandAlt u-textCenter u-marginBD6">And that’s it, you’re finished.</p>
				<p className="u-textMd u-colorBrandAlt u-textCenter u-marginB15">Thanks for your help!</p>
				<div className="c-delimit-rule c-delimit-rule--active"></div>
				<span className="c-delimit-block">
					<button className="Button t-button" name="button" type="button" value="Submit survey" onClick={this.props.submitSurvey}>
						<IcSubmit align="left" />
						Submit &amp; show score
					</button>
				</span>
			</div>
		)
	}
});

module.exports = SubmitSurveys;
