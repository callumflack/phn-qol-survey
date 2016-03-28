var React = require('react');
require('./heading.scss');

module.exports = React.createClass({
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
