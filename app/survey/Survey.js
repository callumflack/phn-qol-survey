var questionData = require('./data/questions.js');
var React = require('react');
var Question = require('./Question');

var Survey = React.createClass({
    render: function() {
        return (
            <form method="post" action="" className="Survey">
                {this.props.questionData.map(function(questionData, i) {
                  return <Question questionData={questionData} key={i}/>  
                })}
                <input type="submit" value="Submit survey"/>
            </form>
        )
    }
});


module.exports = e => <Survey questionData={questionData} />