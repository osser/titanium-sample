var args = arguments[0] || {};

(function() {
    $.section1.setItems(getData());
})();

function getData() {
    var data = [{
        properties : {
            title : 'Alert will show title (deja vu)',
            itemId : 'title',
            height : 44,
            color : 'black'
        }
    }, {
        properties : {
            title : 'Alert Foobar (custom property)',
            itemId : 'custom',
            height : 44,
            color : 'blue'
        },
        customData : 'Foobar'
    }];
    return data;
}

var listView_itemclick = function(e) {
    var message = 'No itemId in event';
    if (e.itemId == 'title') {
        message = e.section.getItemAt(e.itemIndex).properties.title;
    } else if (e.itemId == 'custom') {
        message = e.section.getItemAt(e.itemIndex).customData;
    }
    alert(message);
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_itemsget',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

