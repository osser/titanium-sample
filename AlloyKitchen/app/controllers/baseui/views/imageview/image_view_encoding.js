var args = arguments[0] || {};

(function() {
    $.imageView.image = 'http://appcelerator.qe.test.data.s3.amazonaws.com/KSResources/image/' + encodeURIComponent('ΜΟΥΣΙΚΗ') + '/appc_logo200.png';
    console.log($.imageView.image);
})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/imageview/image_view_encoding',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
