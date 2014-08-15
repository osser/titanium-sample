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
