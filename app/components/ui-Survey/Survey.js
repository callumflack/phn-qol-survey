var React = require("react");
var Nav = require("../ui-Nav/Nav.js");
var questionData = require('./data/questions.js');
var Question = require('./Question');

require('./../../stylesheets/app.scss');

var Survey = React.createClass({
	render: function() {
		return (
			<form method="post" action="" className="Survey u-marginT5">
				{this.props.questionData.map(function(questionData, i) {
				  return <Question questionData={questionData} key={i}/>
				})}
				<input type="submit" value="Submit survey"/>
			</form>
		)
	}
});


module.exports = e => <Survey questionData={questionData} />
