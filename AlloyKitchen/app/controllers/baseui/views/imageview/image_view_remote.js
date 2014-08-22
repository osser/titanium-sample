var args = arguments[0] || {};

(function() {

})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/imageview/image_view_remote',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var btnRemoteImage_click = function(e) {
    $.imageView2.image = 'http://static.appcelerator.com/images/header/appc_logo.png';
};
