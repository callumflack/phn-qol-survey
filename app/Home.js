var React = require("react");
var Heading = require("./Heading.js");
var Nav = require("./Nav.js");

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <Heading title="Landing" />
            </div>
        );
    }
});