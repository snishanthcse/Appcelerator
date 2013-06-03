function Controller() {
    function doClick() {
        $.loading.setOpacity(1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.loaderView = Ti.UI.createView({
        id: "loaderView",
        layout: "vertical"
    });
    $.__views.index.add($.__views.loaderView);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Click bellow button to start the loading",
        id: "__alloyId1"
    });
    $.__views.loaderView.add($.__views.__alloyId1);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "Click Here",
        top: "10",
        width: "150",
        height: "50"
    });
    $.__views.loaderView.add($.__views.button);
    doClick ? $.__views.button.addEventListener("click", doClick) : __defers["$.__views.button!click!doClick"] = true;
    $.__views.loading = Alloy.createWidget("customLoader", "widget", {
        id: "loading",
        __parentSymbol: $.__views.index
    });
    $.__views.loading.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.loading.setOpacity(0);
    $.index.open();
    __defers["$.__views.button!click!doClick"] && $.__views.button.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;