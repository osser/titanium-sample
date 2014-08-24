var args = arguments[0] || {};

(function() {
})();

var listView_itemclick = function(e) {
    var item = e.section.getItemAt(e.itemIndex);
    if (item.properties.formid) {
        var winid = 'baseui/views/webview/' + item.properties.formid;
        if (OS_IOS) {
            var win = Alloy.createController(winid, {
                parentTab : args.parentTab
            }).getView();
            args.parentTab.open(win);
        };
        if (OS_ANDROID) {
            var win = Alloy.createController(winid, {}).getView();
            win.open();
        }
    } else {
        alert(item.properties.title);
    }
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/webviews',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
