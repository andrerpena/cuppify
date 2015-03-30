var React = require("react");

var MainHeader = React.createClass({
    render: function() {
        return <header className="main-header">
            <div className="logo">
                cuppify
            </div>
        </header>;
    }
});

module.exports = MainHeader;