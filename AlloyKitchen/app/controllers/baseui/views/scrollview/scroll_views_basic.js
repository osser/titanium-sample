var args = arguments[0] || {};

(function() {

})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/scrollview/scroll_views_basic',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var button1_click = function(e) {
    $.scrollView.scrollTo(0, 0);
};

var button2_click = function(e) {
    var view = Ti.UI.createView({
        backgroundColor : 'red',
        borderRadius : 10,
        width : 300,
        height : 300,
        top : 2020
    });
    $.scrollView.add(view);
};
