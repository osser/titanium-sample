var args = arguments[0] || {};

(function() {
    $.lblDesc.setText('This test shows the delete support in ListView. This is separate from the delete programming API and is user initiated.\n\n' + 'Deletion is supported by the canEdit property of the listItem (default is false).\n\n' + 'The delete event fires when a row is deleted. The itemIndex and sectionIndex in this event correspond to the old data set. By the time the event is fired the dataset is already updated.\n\n' + 'The ListView property pruneSectionsOnEdit (default false) controls if empty sections are kept around while editing.This property only effects the section being edited. In this example pruneSectionsOnEdit is true.\n\n' + 'The ListView can be put in editing mode either by swiping accross a row that has canEdit true or by manually setting the editing property of the ListView.\n\n' + 'Click the buttons to ensure that events fired from child templates have the right itemIndex and sectionIndex after delete.\n\n');

    var data1 = [{
        properties : {
            accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE
        },
        info : {
            text : 'canEdit = Undefined'
        }
    }, {
        properties : {
            accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE,
            canEdit : false
        },
        info : {
            text : 'canEdit = false'
        }
    }, {
        properties : {
            accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE,
            canEdit : true
        },
        info : {
            text : 'canEdit = true'
        }
    }];
    $.section1.setItems(data1);

    var data2 = [{
        properties : {
            accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE
        },
        info : {
            text : 'canEdit = Undefined'
        }
    }, {
        properties : {
            accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE,
            canEdit : false
        },
        info : {
            text : 'canEdit = false'
        }
    }];
    $.section2.setItems(data2);

    var data3 = [{
        properties : {
            accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE,
            canEdit : true
        },
        info : {
            text : 'canEdit = true'
        }
    }, {
        properties : {
            accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE,
            canEdit : true
        },
        info : {
            text : 'canEdit = true'
        }
    }];
    $.section3.setItems(data3);

    var data4 = [{
        properties : {
            accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE
        },
        info : {
            text : 'canEdit = Undefined'
        }
    }, {
        properties : {
            accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE,
            canEdit : true
        },
        info : {
            text : 'canEdit = true'
        }
    }, {
        properties : {
            accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE,
            canEdit : false
        },
        info : {
            text : 'canEdit = false'
        }
    }];
    $.section4.setItems(data4);

    var data5 = [{
        properties : {
            accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE
        },
        info : {
            text : 'canEdit = Undefined'
        }
    }, {
        properties : {
            accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE,
            canEdit : false
        },
        info : {
            text : 'canEdit = false'
        }
    }];
    $.section5.setItems(data5);

    var data6 = [{
        properties : {
            accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE,
            canEdit : true
        },
        info : {
            text : 'canEdit = true'
        }
    }, {
        properties : {
            accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE,
            canEdit : true
        },
        info : {
            text : 'canEdit = true'
        }
    }];
    $.section6.setItems(data6);

})();

var btnUnderstand_click = function(e) {
    $.frmWin.remove($.scrollView);
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
        sourceUrl : 'baseui/views/listview/list_v2_delete_rows',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var isEditing = false;

var btnEditing_click = function(e) {
    if ($.listView.editing !== undefined) {
        isEditing = $.listView.editing;
        $.lblStatus.text = 'listView.editing is ' + isEditing + '. Setting to ' + !isEditing;
    } else {
        $.lblStatus.text = 'listView.editing is undefined. ASSUME false. Setting to true';
        isEditing = false;
    }
    isEditing = !isEditing;
    $.listView.setEditing(isEditing);
};

var listView_delete = function(e) {
    $.lblStatus.text = 'delete event sectionIndex=' + e.sectionIndex + ', itemIndex=' + e.itemIndex;
};
