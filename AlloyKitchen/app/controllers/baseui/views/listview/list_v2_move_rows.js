var args = arguments[0] || {};

(function() {
    $.lblInfo.setText('This test shows the reorder support in ListView. Reordering is supported by the canMove property of the listItem (default is false).\n\n' + 'The move event fires when a row is moved. The itemIndex and sectionIndex in this event correspond to the old data set. The event also has targetSectionIndex and targetItemIndex specifying where the item was moved.\n\n' + 'The ListView property pruneSectionsOnEdit (default false) controls if empty sections are kept around while reordering. This property only effects the section being edited. In this example pruneSectionsOnEdit is false.\n\n' + 'The ListView must be put in editing mode by setting the editing property of the ListView to true for reordering support.\n\n' + 'Click the buttons to ensure that events fired from child templates have the right itemIndex and sectionIndex after move.\n\n');
    
	var data1 = [
	    {properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}, info:{text:'canMove = Undefined'}},
	    {properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE, canMove:false}, info:{text:'canMove = false'}},
	    {properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE, canMove:true}, info:{text:'canMove = true'}},
	];
	$.section1.setItems(data1);
	
	var data2 = [
	    {properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}, info:{text:'canMove = Undefined'}},
	    {properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE, canMove:false}, info:{text:'canMove = false'}},
	];
	$.section2.setItems(data2);
	
	var data3 = [
	    {properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE, canMove:true}, info:{text:'canMove = true'}},
	    {properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE, canMove:true}, info:{text:'canMove = true'}},
	];
	$.section3.setItems(data3);

	var data4 = [
	    {properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}, info:{text:'canMove = Undefined'}},
	    {properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE, canMove:true}, info:{text:'canMove = true'}},
	    {properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE, canMove:false}, info:{text:'canMove = false'}},
	];
	$.section4.setItems(data4);
    
	var data5 = [
	    {properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}, info:{text:'canMove = Undefined'}},
	    {properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE, canMove:false}, info:{text:'canMove = false'}},
	];
	$.section5.setItems(data5);
    
	var data6 = [
	    {properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE, canMove:true}, info:{text:'canMove = true'}},
	    {properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE, canMove:true}, info:{text:'canMove = true'}},
	];
	$.section6.setItems(data6);
    
})();

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

var btnUnderstand_click = function(e) {
    $.frmWin.remove($.scrollView);
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

var listView_move = function(e) {
    $.lblStatus.text = 'move (section,item) from (' + e.sectionIndex + ',' + e.itemIndex + ') to (' + e.targetSectionIndex + ',' + e.targetItemIndex + ')';
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_v2_move_rows',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
