var args = arguments[0] || {};

var _WhenStillImgs = [];
var _WhenMovingImgs = [];
_WhenStillImgs.push('/common/Kicking00.png');
_WhenStillImgs.push('/common/Kicking20.png');
_WhenMovingImgs.push('/common/Kicking00.png');
_WhenMovingImgs.push('/common/Kicking14.png');

(function() {
    $.imageView.images = _WhenStillImgs;
    $.imageView.start();
})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/imageview/image_view_updateimages',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var imageView_touchstart = function(e) {
    Ti.API.info('I WAS CLICKED');
    $.imageView.stop();
    $.imageView.images = _WhenMovingImgs;
    $.imageView.start();
};
