var args = arguments[0] || {};

(function() {

})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/scrollview/scroll_views_tabs',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var scrollView1_scroll = function(e) {
    Ti.API.info('x ' + e.x + ' y ' + e.y);
    if (e.x > 50) {
        $.leftImage.show();
    } else {
        $.leftImage.hide();
    }
    if (e.x < 130) {
        $.rightImage.show();
    } else {
        $.rightImage.hide();
    }
};
