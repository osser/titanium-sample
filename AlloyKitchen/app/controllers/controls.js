var args = arguments[0] || {};
var lv_itemclick = function(e) {
    var item = e.section.getItemAt(e.itemIndex);
    alert(item.properties.title);
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'controls',
    }).getView();

    if (OS_IOS) {
        $.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
