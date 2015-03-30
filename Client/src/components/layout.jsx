var React = require("react");
var TopBar = require("./top-bar.jsx");
var Content = require("./content.jsx");

var Layout = React.createClass({
    render: function() {
        return <div className="page">
            <TopBar/>
            <Content />
        </div>;
    }
});

module.exports = Layout;