var React = require("react");
var Menu = require("./top-bar-menu.jsx");

var TopBar = React.createClass({
    render: function() {
        return <div>
                <div>
                    <Menu/>
                </div>
            </div>;
    }
});

module.exports = TopBar;