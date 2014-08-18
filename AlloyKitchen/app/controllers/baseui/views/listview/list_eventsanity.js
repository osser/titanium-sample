var args = arguments[0] || {};

(function() {
    var data0 = [{
        properties : {
            title : 'Alert 0,0,0',
            itemId : '0',
            height : 44
        }
    }, {
        properties : {
            title : 'Alert 0,1,0',
            itemId : '0',
            height : 44
        }
    }, {
        properties : {
            title : 'Alert 0,2,1',
            itemId : '1',
            height : 44
        }
    }];
    var data1 = [{
        properties : {
            title : 'Alert 1,0,0',
            itemId : '0',
            height : 44
        }
    }, {
        properties : {
            title : 'Alert 1,1,hello',
            itemId : 'hello',
            height : 44
        }
    }, {
        properties : {
            title : 'Alert 1,2,1',
            itemId : '1',
            height : 44
        }
    }];

    if (OS_IOS)
        data0.push({
            properties : {
                title : 'Click Accessory/Row',
                itemId : '-1',
                accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_DETAIL,
                height : 44
            }
        });

    $.section0.setItems(data0);
    $.section1.setItems(data1);

})();

var listView_itemclick = function(e) {
    if (e.itemId == '-1') {
        var message = 'accessoryClicked = ' + e.accessoryClicked;
        alert(message);
    } else {
        var message = e.sectionIndex + ',' + e.itemIndex + ',' + e.itemId;
        alert(message);
    }
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_eventsanity',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
