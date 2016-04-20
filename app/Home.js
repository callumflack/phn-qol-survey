var React = require("react");
var Nav = require("./Nav.js");
var PageOne = require("./PageOne.js");
require('./stylesheets/app.scss');

var Home = React.createClass({
    render: function () {
        return (
            <div>
                <Nav />
                <PageOne />
            </div>
        );
    }
});

module.exports = Home;
