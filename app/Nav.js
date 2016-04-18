var React = require('react');
// require('./heading.scss');

var Nav = React.createClass({
    render: function() {
        return (
            <nav className="MainMenu">
                <a href="#">Home</a>
                <a href="#device-registration">device-registration</a>
                <a href="#survey">Survey</a>
            </nav>
        );
    }
});

module.exports = Nav;