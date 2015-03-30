var React = require("react");
var MainHeader = require("./main-header.jsx");
var Content = require("./content.jsx");
var Footer = require("./footer.jsx");

var Layout = React.createClass({
    render: function() {
        return <div className="page">
            <MainHeader/>
            <Content />
            <Footer />
        </div>;
    }
});

module.exports = Layout;