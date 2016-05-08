var React = require("react");
var IcSubmit = require('../ui-Icons/Icons.js').IcSubmit;

var StartAboutSurvey = React.createClass({
	submitSurvey: function(submitEvent) {
		submitEvent.preventDefault();
		submitEvent.stopPropagation();

		this.props.submitSurvey();
	},
	render: function() {
		return (
			<div className="c-delimit u-textCenter u-marginT4 u-marginB6">
				<p className="u-textMd u-textWtMd u-colorBrandAlt u-textCenter u-marginBD6">Now on to the second part.</p>
				<p className="u-textMd u-colorBrandAlt u-textCenter u-marginB15">5 easy multiple choice questions.</p>
				<div className="c-delimit-rule c-delimit-rule--active"></div>
				<span className="c-delimit-block">
					<button className="Button t-button" name="button" type="button" onClick={this.startSurvey} value="Submit survey">
						Complete the section about you
					</button>
				</span>
			</div>
		)
	}
});

module.exports = StartAboutSurvey;
