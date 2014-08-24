var args = arguments[0] || {};

(function() {

})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/scrollview/scroll_views_scaling',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var scrollView_scale = function(e) {
    $.lblMsg.text = "Zoomed to scale: " + e.scale;
};

var scrollView_scroll = function(e) {
    $.lblMsg.text = "Scrolling to x:" + Math.round(e.x) + ", y:" + Math.round(e.y);
};

var rightBtnBar_click = function(e) {
    console.log(e);
    if (e.index === 0) {
        $.scrollView.zoomScale = $.scrollView.zoomScale + 0.1;
    } else if (e.index === 1) {
        $.scrollView.zoomScale = $.scrollView.zoomScale - 0.1;
    } else {
        showSource(e);
    }
    $.lblMsg.text = "Scale: " + $.scrollView.zoomScale;
};
