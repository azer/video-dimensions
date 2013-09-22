var videoDimensions = require("./");
var video;

before(function(done){
  document.body.innerHTML = [
      '<video>'
    , '<source src="https://dl.dropboxusercontent.com/u/52141482/totoro.mp4" type="video/mp4" />'
    , '<source src="https://dl.dropboxusercontent.com/u/52141482/totoro.webm" type="video/webm" />'
    , '</video>'
  ];

  video = document.querySelector('video');
  done();
});


it('returns the dimensions of given video', function(done){
  videoDimensions(video, function (width, height) {
    expect(width).to.equal(480);
    expect(height).to.equal(480);
    done();
  });
});
