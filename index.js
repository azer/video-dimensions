var on = require("on-off");

module.exports = videoDimensions;

function videoDimensions (el, callback) {
  on(el, 'loadedmetadata', function cb () {
    callback(el.videoWidth, el.videoHeight);
    on.off(el, 'loadedmetadata', callback);
  });
}
