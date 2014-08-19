var args = arguments[0] || {};

(function() {
    $.lblInfo.setText('This is a modified version of the child event test. The events are added to the child template.' + 'ListView is also listening for the itemclick event.\n' + 'We are using a label and not a button which makes a difference on iOS.\n' + 'The template defines two children. Button 0 has bindId(ZERO), Label 1 has no bindId.\n' + 'The first row in each section has no itemId, the second row does (ROW 1).\n' + 'WE MAY NOT HAVE PARITY(LABELS) HERE DUE TO UNDERLYING OS');

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
    var message = 'Type:' + e.type + '\nSection title:' + e.section.headerTitle + '\nsectionIndex:' + e.sectionIndex + '\nitemIndex:' + e.itemIndex;
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
        sourceUrl : 'baseui/views/listview/list_eventchild2',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
