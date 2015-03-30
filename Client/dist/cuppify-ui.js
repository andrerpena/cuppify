(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var React = (window.React);

var Content = React.createClass({displayName: "Content",
    render: function () {
        return React.createElement("div", null, "Content 2");
    }
});

module.exports = Content;

},{}],2:[function(require,module,exports){
var React = (window.React);
var TopBar = require("./top-bar.jsx");
var Content = require("./content.jsx");

var Layout = React.createClass({displayName: "Layout",
    render: function() {
        return React.createElement("div", {className: "page"}, 
            React.createElement(TopBar, null), 
            React.createElement(Content, null)
        );
    }
});

module.exports = Layout;

},{"./content.jsx":1,"./top-bar.jsx":4}],3:[function(require,module,exports){
var React = (window.React);

var TopBarMenu = React.createClass({displayName: "TopBarMenu",
    render: function() {
        return React.createElement("div", null, "Top menu");
    }
});

module.exports = TopBarMenu;

},{}],4:[function(require,module,exports){
var React = (window.React);
var Menu = require("./top-bar-menu.jsx");

var TopBar = React.createClass({displayName: "TopBar",
    render: function() {
        return React.createElement("div", null, 
                React.createElement("div", null, 
                    React.createElement(Menu, null)
                )
            );
    }
});

module.exports = TopBar;

},{"./top-bar-menu.jsx":3}],5:[function(require,module,exports){
var Layout = require("./components/layout.jsx");
exports.Layout = Layout;

// defining Globals
if(!window.Cuppify) window.Cuppify = new Object();
window.Cuppify.Layout = Layout;

},{"./components/layout.jsx":2}]},{},[5]);
