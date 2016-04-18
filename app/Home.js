var React = require("react");
var Heading = require("./Heading.js");
var Nav = require("./Nav.js");

var Home = React.createClass({
    render: function () {
        return (
            <div>
                <Heading title="Landing" />
                <Nav />
            </div>
        );
    }
});

module.exports = Home;