var args = arguments[0] || {};

var lv_itemclick = function(e) {
    var item = e.section.getItemAt(e.itemIndex);
    if (item.properties.formid) {
        var win = Alloy.createController('baseui/' + item.properties.formid, {
            tabGroup : $.parentTabGroup,
            parentTab : $.parentTab
        }).getView();
        $.parentTab.open(win);
    } else {
        alert(item.properties.title);
    }
};
