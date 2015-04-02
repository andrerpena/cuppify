var React = require("react");

var MainHeader = React.createClass({
    render: function() {
        return <header className="main-header">
            <div className="main-header-wrapper">
            <div className="main-header-wrapper-logo">
                cuppify - this is a modified version
            </div>
                </div>
        </header>;
    }
});

module.exports = MainHeader;