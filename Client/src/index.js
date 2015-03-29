var TopBar = require("./components/top-bar.jsx");
exports.TopBar = TopBar;

// defining Globals
if(!window.Cuppify) window.Cuppify = new Object();
window.Cuppify.TopBar = TopBar;