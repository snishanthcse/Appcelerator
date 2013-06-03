var args = arguments[0] || {};

for (var k in args) {
	$.loading[k] = args[k];
}

if (Ti.Platform.osname === 'mobileweb') {
	$.loading.duration = 100;
}

/**
 * @method setOpacity
 * Sets the opacity of the loading image.
 * @param {Number} opacity Opacity from 0.0 (transparent) to 1.0 (opaque).
 */
exports.setOpacity = function(opacity) {
	$.loading.opacity = opacity;
	$.loading.start();
};
