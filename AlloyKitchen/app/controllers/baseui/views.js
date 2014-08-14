var args = arguments[0] || {};

var lv_itemclick = function(e) {
    var item = e.section.getItemAt(e.itemIndex);
    if (item.properties.formid) {
        console.log('args.testkey:', args.testkey);
        //2014/08/14 15:32:05 Android Error
        //console.log('args.parentTab:', args.parentTab);

        if (OS_IOS) {
            var win = Alloy.createController('baseui/views/' + item.properties.formid, {
                parentTab : args.parentTab
            }).getView();
            args.parentTab.open(win);
        };
        if (OS_ANDROID) {
            var win = Alloy.createController('baseui/views/' + item.properties.formid, {
            }).getView();
            win.open();
        }
    } else {
        alert(item.properties.title);
    }
};
