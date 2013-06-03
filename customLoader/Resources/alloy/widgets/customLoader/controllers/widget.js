function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "customLoader/" + s : s.substring(0, index) + "/customLoader/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    new (require("alloy/widget"))("customLoader");
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.loading = Ti.UI.createImageView({
        images: [ "/images/customLoader/loading1.png", "/images/customLoader/loading1.png", "/images/customLoader/loading2.png", "/images/customLoader/loading3.png", "/images/customLoader/loading4.png", "/images/customLoader/loading5.png", "/images/customLoader/loading6.png", "/images/customLoader/loading7.png" ],
        id: "loading"
    });
    $.__views.loading && $.addTopLevelView($.__views.loading);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    for (var k in args) $.loading[k] = args[k];
    exports.setOpacity = function(opacity) {
        $.loading.opacity = opacity;
        $.loading.start();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;