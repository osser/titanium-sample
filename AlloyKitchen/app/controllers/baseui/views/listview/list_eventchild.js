var args = arguments[0] || {};

(function() {
    var data0 = [{}, {
        properties : {
            itemId : 'ROW 1'
        }
    }];
    $.section0.setItems(data0);

    var data1 = [{}, {
        properties : {
            itemId : 'ROW 1'
        }
    }];
    $.section1.setItems(data1);

})();

var btnUnderstand_click = function(e) {
    $.frmWin.remove($.lblInfo);
    $.frmWin.remove($.btnUnderstand);
    $.listView.setVisible(true);
};

function isValidVar(check) {
    if (check !== undefined && check !== null) {
        return true;
    }
    return false;
}

function clickHandler(e) {
    var message = 'Section title:' + e.section.headerTitle + '\nsectionIndex:' + e.sectionIndex + '\nitemIndex:' + e.itemIndex;
    if (isValidVar(e.bindId)) {
        message += '\nbindId:' + e.bindId;
    }
    if (isValidVar(e.itemId)) {
        message += '\nitemId:' + e.itemId;
    }
    alert(message);
}

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_eventchild',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
