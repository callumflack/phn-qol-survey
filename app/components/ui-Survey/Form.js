var React = require("react");
var Nav = require("../ui-Nav/Nav.js");
var questionData = require('./data/questions.js');
var Question = require('./Question');
var Submit = require('./Submit');

require('./../../stylesheets/app.scss');

var Form = React.createClass({
	/**
	 * Generates some preceding text to be placed above certain questions as
	 * an introdution to the section.
	 * 
	 * @param question Object	The data objet for a single question, as
	 * 							supplied by the PHN QLD Server API. This is used
	 * 							to determine the question number (note, not the
	 * 							question ID in the DB nor React-issued key).
	 * @return	Returns JSX code containing any relevant preceding text if such
	 * 			text exists, or undefined if not.
	 */
	questionPretext: function(question) {
		var qNumber = question.number;
		
		if (qNumber === 2)
			return (<div className="SurveySectionIntro">Q2 Preceding text</div>);
		if (qNumber === 12)
			return (<div className="SurveySectionIntro">Q12 Preceding text</div>);
		if (qNumber === 22)
			return (<div className="SurveySectionIntro">Q22 Preceding text</div>);
			
		// Superflous code, but may help readability:
		// Functions that don't have a return statement return undefined anyway,
		// but I'll leave this here to clarify that any code reaching this point
		// will cause the function to return undefined.
		return undefined; // Also equal to `return;`, or omitting it entirely
	},
	/**
	 * Iterates through each question in the supplied array of question data,
	 * inserting preceding text between Question objects where they exist.
	 * Preceding text is defined (or undefined) using the questionPretext
	 * method above.
	 * 
	 * @param questiondData	question[]	An array of question data objects, as
	 * 									supplied by the PHN QLD Server API.
	 * @return React.Component[]	Returns an array of React components that
	 * 								contain the complete set of questions with
	 * 								any preceeding text slotted in place.
	 */
	questionBlocks: function(questionData) {
		var components = [];
		this.props.questionData.map((question, i) => {
			var precedingText = this.questionPretext(question);
			if (precedingText) components.push(precedingText);
			
			components.push(<Question questionData={question} key={i}/>);
		});
		
		return components;
	},
	render: function() {
		return (
			<form method="post" action="" className="Survey u-marginT5">
				{this.questionBlocks(this.props.questionData)}
				<Submit />
			</form>
		)
	}
});


module.exports = e => <Form questionData={questionData} />
