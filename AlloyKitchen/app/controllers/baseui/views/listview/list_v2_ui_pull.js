var args = arguments[0] || {};

(function() {
    $.lblDesc.setText('This test shows the pullView support in ListView. The pullView property replaces the headerPullView property in TableView.\n\n' + 'In addition to the pullView property, the ListView also introducs two new events - pull and pullend.\n\n' + 'The pull event is fired whenever the user drags the listView past the top edge of the pullView.\n\n' + 'The pull event has a single custom argument active (boolean) which is true when the pullView is fully visible and false when it is partially visible\n\n' + 'The pullend event fires when the user stops dragging the ListView and the pullView is completely visible.\n\n');
    
	var fruitDataSet = [
    	{properties: { title: 'Apple'}},
    	{properties: { title: 'Banana'}},
    	{properties: { title: 'Cantaloupe'}},
    	{properties: { title: 'Fig'}},
    	{properties: { title: 'Guava'}},
    	{properties: { title: 'Kiwi'}},
	];
	$.fruitSection.setItems(fruitDataSet);
	
	    
})();

var btnUnderstand_click = function(e) {
    $.frmWin.remove($.scrollView);
};


function getFormattedDate() {
    var date = new Date();
    return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
}

var refreshCount = 0;


var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_v2_ui_pull',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var listView_pull = function(e) {
    console.log('listView_pull');
    $.eventStatus.text = 'EVENT pull FIRED. e.active = ' + e.active;
    if (e.active == false) {
        var unrotate = Ti.UI.create2DMatrix();
        $.imageArrow.animate({
            transform : unrotate,
            duration : 180
        });
        $.labelStatus.text = 'Pull down to refresh...';
    } else {
        var rotate = Ti.UI.create2DMatrix().rotate(180);
        $.imageArrow.animate({
            transform : rotate,
            duration : 180
        });
        if (refreshCount == 0) {
            $.labelStatus.text = 'Release to get Vegetables...';
        } else {
            $.labelStatus.text = 'Release to get Fish...';
        }
    }
};


var listView_pullend = function(e) {
    console.log('listView_pullend');
    $.eventStatus.text = 'EVENT pullend FIRED.';
    if (refreshCount == 0) {
        $.labelStatus.text = 'Loading Vegetables...';
    } else {
        $.labelStatus.text = 'Loading Fish...';
    }
    $.imageArrow.hide();
    $.actInd.show();
    $.listView.setContentInsets({
        top : 80
    }, {
        animated : true
    });
    setTimeout(function() {
    	alert('データロード処理');
    	resetPullHeader();
    }, 2000);

};

function resetPullHeader() {
    $.actInd.hide();
    $.imageArrow.transform = Ti.UI.create2DMatrix();
    if (refreshCount < 2) {
        $.imageArrow.show();
        $.labelStatus.text = 'Pull down to refresh...';
        $.labelLastUpdated.text = 'Last Updated: ' + getFormattedDate();
    } else {
        $.labelStatus.text = 'Nothing To Refresh';
        $.labelLastUpdated.text = 'Go Cook Something';
        $.listView.removeEventListener('pull', listView_pull);
        $.listView.removeEventListener('pullend', listView_pullend);
        $.eventStatus.text = 'Removed event listeners.';
    }
    $.listView.setContentInsets({
        top : 0
    }, {
        animated : true
    });
}
