var args = arguments[0] || {};

(function() {

})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/imageview/image_view_basic',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var imageView_load = function(e) {
    Ti.API.info('LOAD CALLED');
};

var imageView_click = function(e) {
    Titanium.UI.createAlertDialog({
        title : 'Image View',
        message : 'You clicked me!'
    }).show();
    $.lblInfo.text = "Try again. You shouldn't get alert and the image should be different";
    $.imageView.image = '/common/cloud.png';
    $.imageView.removeEventListener('click', imageView_click);
};
