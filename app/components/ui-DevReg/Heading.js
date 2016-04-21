var React = require('react');

var Heading = React.createClass({
  getDefaultProps: function() {
      return {
          title: "Loading..."
      }
  },
  render: function () {
    return (
      <h1>{this.props.title}</h1>
    );
  }
});

module.exports = Heading;
