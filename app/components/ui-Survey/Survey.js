var React = require("react");
var Nav = require('../ui-Nav/Nav.js');
var Form = require('./Form.js');

var SurveyPage = React.createClass({
	render: function () {
		return (
			<div>
				<Nav details="registered" />
				<main className="o-content" role="main">
					<div className="o-container">

						<p className="u-textMd u-textWtRg">This assessment asks how you feel about your quality of life, health, or other areas of your life.</p>
						<p className="u-textMd u-colorBrandCount">Please answer all the questions.</p>
						<p className="u-textMd u-textWtRg">Please keep in mind your standards, hopes, pleasures and concerns. We ask that you think about your life in the last two weeks.</p>
						<p className="u-textMd u-colorBrandCount">If you are unsure about which response to give to a question, please choose the one that appears most appropriate. This can often be your first response.</p>
						<p className="u-textMd u-textWtRg">Please read each question, assess your feelings, and choose the number on the scale for each question that gives the best answer for you.</p>

						<div className="c-delimit u-textCenter u-marginT2">
							<div className="c-delimit-rule c-delimit-rule--active"></div>
							<span className="c-delimit-block">
								<button className="Button t-button" type="button" name="button">Continue</button>
							</span>
							<p className="u-textXs--faint u-textCenter u-marginT"><a href="#">Cancel</a></p>
						</div>

						<Form />

					</div>
				</main>
			</div>
		);
	}
});

module.exports = SurveyPage;
