var React = require("react");
var Nav = require("../ui-Nav/Nav.js");
var questionData = require('./data/questions.js');
var Question = require('./Question');
var Submit = require('./Submit');

require('./../../stylesheets/app.scss');

var Form = React.createClass({
	/**
	 * Generates some preceding text to be placed above certain questions as
	 * an introduction to the section.
	 *
	 * @param question Object	The data object for a single question, as
	 * 							supplied by the PHN QLD Server API. This is used
	 * 							to determine the question number (note, not the
	 * 							question ID in the DB nor React-issued key).
	 * @return	Returns JSX code containing any relevant preceding text if such
	 * 			text exists, or undefined if not.
	 */
	questionPretext: function(question) {
		var qNumber = question.number;

		if (qNumber === 3)
			return (<div className="c-questionContext">The following questions ask about how much you have experienced certain things in the last two weeks.</div>);
		if (qNumber === 10)
			return (<div className="c-questionContext">The following questions ask about how completely you experience or were able to do certain things in the last two weeks.</div>);
		if (qNumber === 16)
			return (<div className="c-questionContext">The following questions ask you to say how good or satisfied you have felt about various aspects of your life over the last two weeks.</div>);
		if (qNumber === 26)
			return (<div className="c-questionContext">The following question refers to how often you have felt or experienced certain things in the last two weeks.</div>);

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
			
			var questionNumber = question.number,
				questionText = question.text,
				answers = question.answers.slice(0);

			components.push(
				<Question
					number={questionNumber}
					text={questionText}
					answers={answers}
					key={i}
				/>
			);
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
