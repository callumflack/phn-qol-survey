var React = require("react");
var IcSubmit = require('../ui-Icons/Icons.js').IcSubmit;

var Submit = React.createClass({
	submitSurvey: function(submitEvent) {
		submitEvent.preventDefault();
		submitEvent.stopPropagation();
		
		this.props.submitSurvey();
	},
	render: function() {
		return (
			<div className="c-delimit u-textCenter u-marginT4 u-marginBL">
				<p className="u-textMd u-textWtMd u-colorBrandAlt u-textCenter u-marginBD6">And that’s it, you’re finished.</p>
				<p className="u-textMd u-colorBrandAlt u-textCenter u-marginB15">Thanks for your help!</p>
				<div className="c-delimit-rule c-delimit-rule--active"></div>
				<span className="c-delimit-block">
					<button className="Button t-button" name="button" type="button" onClick={this.submitSurvey} value="Submit survey">
						<IcSubmit align="left" />
						Submit
					</button>
				</span>
			</div>
		)
	}
});

module.exports = Submit;
