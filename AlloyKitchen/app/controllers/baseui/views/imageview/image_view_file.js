var args = arguments[0] || {};

(function() {
    var f = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, '/common/flower.jpg');
    $.imageView.image = f;
})();

var imageView_click = function(e) {
    Titanium.UI.createAlertDialog({
        title : 'Image View',
        message : 'You clicked me!'
    }).show();
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/imageview/image_view_file',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
