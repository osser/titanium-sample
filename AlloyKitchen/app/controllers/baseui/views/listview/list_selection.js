var args = arguments[0] || {};

(function() {
    var data = [{
        template : 'myCell',
        cellButton : {
            title : 'Click Please!'
        },
        lblAAA : {
            text : 'BBB'
        }
    }].concat(getData());
    $.listSection.setItems(data);
})();

function getData() {
    var data = [];
    var subtitleStr = '';

    for ( i = 0; i < 40; i++) {
        var acType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
        if (i == 1) {
            subtitleStr = 'I have checkmark accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
        } else if (i == 2) {
            subtitleStr = 'I have detail accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_DETAIL;
        } else if (i == 3) {
            subtitleStr = 'I have disclosure accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE;
        } else {
            subtitleStr = 'I have no accessory ';
        }
        var item = {
            template : Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT,
            properties : {
                title : subtitleStr,
                accessoryType : acType,
                itemId : 'Item ' + i + ' ' + acType
            }
        };
        data.push(item);
    }
    return data;
}

var allowSelection = true;
var btn2_click = function(e) {
    allowSelection = !allowSelection;
    if (allowSelection) {
        $.lblStatus.setText('Allows Selection is true.\nClick a row or accessory and itemclick must fire');
    } else {
        $.lblStatus.setText('Allows Selection is FALSE.\nClick a row or accessory and itemclick must --NOT-- fire. (Except for detail accessory). Button clicks should still fire.');
    }
    $.listView.allowsSelection = allowSelection;
};

var scrolltotop = true;
var btn1_click = function(e) {
    //If the user taps on the status bar, the view scrolls to the top. This gesture works when you have a single visible list view. If there are multiple list views, table views, web views, text areas, and/or scroll views visible, you need to disable (set to false) this property on the views you DO NOT want to enable this behavior for. The remaining view responds to the scroll-to-top gesture.
    scrolltotop = !scrolltotop;
    $.listView.willScrollOnStatusTap = scrolltotop;
};

//function cellButton_click(e) {
function cellButton_click(e) {
    alert('Button Click Event Fired!');
};

var listView_itemclick = function(e) {
    alert('Got Item Click');
};

var tplView_click = function(e) {
    alert('tplView_click');
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_selection',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
