var args = arguments[0] || {};

(function() {
    $.lblInfo.setText('Check for Bubbling to listItem. The events are added to the custom template.\n' + 'The template defines two buttons. Button 0 has bindId(ZERO), Button 1 has no bindId.\n' + 'The first row in each section has no itemId, the second row does (ROW 1).\n' + 'Expected event bubbles, gets right section, sectionIndex, itemIndex, itemId (if availabe) and bindId(if available)\n' + 'ENSURE PARITY');

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
    //alert('btnUnderstand_click');
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
        sourceUrl : 'baseui/views/listview/list_eventbubble',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
