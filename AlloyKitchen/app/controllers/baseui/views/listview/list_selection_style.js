var args = arguments[0] || {};

(function() {
    var data = [{
        properties : {
            title : 'SELECTION STYLE UNDEFINED'
        }
    }, {
        properties : {
            title : 'SELECTION STYLE BLUE',
            selectionStyle : Ti.UI.iPhone.ListViewCellSelectionStyle.BLUE
        }
    }, {
        properties : {
            title : 'SELECTION STYLE GRAY',
            selectionStyle : Ti.UI.iPhone.ListViewCellSelectionStyle.GRAY
        }
    }, {
        properties : {
            title : 'SELECTION STYLE NONE',
            selectionStyle : Ti.UI.iPhone.ListViewCellSelectionStyle.NONE
        }
    }];
    $.listSection.setItems(data);
})();

var listView_itemclick = function(e) {
    alert('ITEM CLICK EVENT');
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_selection_style',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
