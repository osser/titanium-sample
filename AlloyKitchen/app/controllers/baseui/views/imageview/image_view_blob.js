var args = arguments[0] || {};

(function() {
    // start a blob async and notify callback when completed
    args.parentTab.toImage(function(e) {
        Ti.API.info("tiGroup blob has been rendered: " + e.blob.width + "x" + e.blob.height);
    });

    $.imageView.image = Alloy.Globals.tabGroupImage;
})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/imageview/image_view_blob',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
