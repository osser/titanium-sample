var args = arguments[0] || {};

var lv_itemclick = function(e) {
    var item = e.section.getItemAt(e.itemIndex);
    if (item.properties.formid) {
        var winid = 'baseui/views/listview/' + item.properties.formid;
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
