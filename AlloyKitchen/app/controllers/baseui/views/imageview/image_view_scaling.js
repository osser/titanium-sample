var args = arguments[0] || {};

(function() {

})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/imageview/image_view_scaling',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var lblInfo_click = function(e) {
    $.lblInfo.text = 'retrieving dimensions...';
    var blob = $.imageView.toBlob();
    if (blob === null) {
        $.lblInfo.text = 'Unable to retrieve image dimensions. The image is a remote url -- are you connected to the network? Or the ' + TIMEOUT_SECS + ' second timeout expired. Tap here to try again.';
    } else {
        $.lblInfo.text = blob.width + "x" + blob.height;
        $.lblInfo.removeEventListener('click', lblInfo_click);
    }
};
