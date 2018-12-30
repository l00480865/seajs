define(function(require, exports, module) {
    var Panel = require("./Panel.js").Panel;
    var panel = new Panel("panel", "The place we promised");
    var title = document.getElementById("title");
    title.innerHTML = "seajs";
    panel.init("panel");
})