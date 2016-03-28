var React = require('react');
var Answer = require('./Answer.js');

var Question = React.createClass({
    getInitialState: function() {
        return {answered : false};
    },
    handleChildChange: function(child) {
        console.log("A child has changed!");
    },
    render: function() {
        var questionNumber = this.props.questionData.number;
        return (
            <div className={"Survey-question " + this.props.answered? "-is-answered" : ""}>
                <span>Q{this.props.questionData.number}</span>
                <span>{this.props.questionData.text}</span>
                <div className="Survey-questionAnswers">
                    {this.props.questionData.answers.map(function(answer, i) {
                        return <Answer key={i} value={answer.value} label={answer.label} questionNumber={questionNumber} question={this}/>
                    })}
                </div>
            </div>
        )
    }
})

module.exports = Question;