(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var React = (window.React);

var Content = React.createClass({displayName: "Content",
    render: function () {
        return React.createElement("div", null);
    }
});

module.exports = Content;

},{}],2:[function(require,module,exports){
var React = (window.React);

var Footer = React.createClass({displayName: "Footer",
    render: function() {
        return React.createElement("div", {className: "footer"}

        );
    }
});

module.exports = Footer;

},{}],3:[function(require,module,exports){
var React = (window.React);
var MainHeader = require("./main-header.jsx");
var Content = require("./content.jsx");
var Footer = require("./footer.jsx");

var Layout = React.createClass({displayName: "Layout",
    render: function() {
        return React.createElement("div", {className: "page"}, 
            React.createElement(MainHeader, null), 
            React.createElement(Content, null), 
            React.createElement(Footer, null)
        );
    }
});

module.exports = Layout;

},{"./content.jsx":1,"./footer.jsx":2,"./main-header.jsx":4}],4:[function(require,module,exports){
var React = (window.React);

var MainHeader = React.createClass({displayName: "MainHeader",
    render: function() {
        return React.createElement("header", {className: "main-header"}, 
            React.createElement("div", {className: "main-header-wrapper"}, 
            React.createElement("div", {className: "main-header-wrapper-logo"}, 
                "cuppify"
            )
                )
        );
    }
});

module.exports = MainHeader;

},{}],5:[function(require,module,exports){
var Layout = require("./components/layout.jsx");
exports.Layout = Layout;

// defining Globals
if(!window.Cuppify) window.Cuppify = new Object();
window.Cuppify.Layout = Layout;

},{"./components/layout.jsx":3}]},{},[5]);
