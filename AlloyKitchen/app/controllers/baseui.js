var args = arguments[0] || {};

var lv_itemclick = function(e) {
    var item = e.section.getItemAt(e.itemIndex);
    if (item.properties.formid) {
        var win = Alloy.createController('baseui/' + item.properties.formid, {
            tabGroup : $.parentTabGroup,
            parentTab : $.parentTab,
            testkey : 'test-value'
        }).getView();
        $.parentTab.open(win);
    } else {
        alert(item.properties.title);
    }
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui',
    }).getView();

    if (OS_IOS) {
        $.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
