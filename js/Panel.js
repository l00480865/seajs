define(function (require, exports, module) {
    var Panel = function (title, content) {
        this.title = title;
        this.content = content;
    }

    Panel.prototype.init = function (domId) {
        var panel = document.getElementById(domId);
        panel.innerHTML = this.title;
        setInterval(function() {
            console.log(34)
        }, 1000)
    }

    // exports.Panel = Panel;
    module.exports = {
        Panel: Panel
    };
})