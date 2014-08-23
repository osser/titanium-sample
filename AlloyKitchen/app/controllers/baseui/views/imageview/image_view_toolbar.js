var args = arguments[0] || {};

(function() {

})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/imageview/image_view_toolbar',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var camera_click = function(e) {
    alert('camera click');
};

var folder_click = function(e) {
    alert('folder click');
};

var setting_click = function(e) {
	alert('setting click');
};
