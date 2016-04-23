var React = require("react");
var Nav = require("../ui-Nav/Nav.js");
var questionData = require('./data/questions.js');
var Question = require('./Question');
var Submit = require('./Submit');

require('./../../stylesheets/app.scss');

var AboutForm = React.createClass({
	render: function() {
		return (
			<form method="post" action="" className="Survey u-marginT5">
				{this.props.questionData.map(function(questionData, i) {
					return <Question questionData={questionData} key={i}/>
				})}

				<Submit />
			</form>
		)
	}
});


module.exports = e => <AboutForm questionData={questionData} />
