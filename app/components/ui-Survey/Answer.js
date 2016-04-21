var React = require('react');
var Answer = React.createClass({
    updateQuestion: function(event) {
    },
    render: function() {
        return (
            <label onClick={this.updateQuestion}>
                <input name={"q_" + this.props.questionNumber} value={this.props.value} type="radio"/>
                <span className="Survey-answerText">{this.props.label}</span>
            </label>
        )
    }
});

module.exports = Answer;