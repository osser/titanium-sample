var args = arguments[0] || {};

(function() {
    $.frmWin.remove($.listview2);

    var data = [{
        properties : {
            title : 'bgColor red, selectionStyle BLUE',
            backgroundColor : 'red',
            // selectionStyle : Ti.UI.iPhone.ListViewCellSelectionStyle.BLUE
        }
    }, {
        properties : {
            title : 'bgColor green, selectionStyle GRAY',
            backgroundColor : 'green',
            // selectionStyle : Ti.UI.iPhone.ListViewCellSelectionStyle.GRAY
        }
    }, {
        properties : {
            title : 'bgColor cyan, selectionStyle NONE',
            backgroundColor : 'cyan',
            // selectionStyle : Ti.UI.iPhone.ListViewCellSelectionStyle.NONE
        }
    }, {
        properties : {
            title : 'bgColor white, selectedBgColor green',
            backgroundColor : 'white',
            selectedBackgroundColor : 'green'
        }
    }, {
        properties : {
            title : 'bgImage corkboard, selectionStyle BLUE',
            backgroundImage : '/common/corkboard.jpg',
            // selectionStyle : Ti.UI.iPhone.ListViewCellSelectionStyle.BLUE
        }
    }, {
        properties : {
            title : 'bgImage corkboard, selectedBgImage orangeBar',
            backgroundImage : '/common/corkboard.jpg',
            selectedBackgroundImage : '/common/slider_orangebar.png'
        }
    }];

    var actualData1 = [];
    var i;
    for ( i = 0; i < 60; i++) {
        actualData1.push(data[i % 6]);
    }
    $.section1.setItems(actualData1);

    var actualData2 = [];
    var i;
    for ( i = 10; i < 70; i++) {
        actualData2.push(data[i % 6]);
    }
    $.section2.setItems(actualData2);
})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_v2_custom_backgrounds',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var isGrouped = false;

var btnToggleListView_click = function(e) {
    if (isGrouped == false) {
        $.frmWin.remove($.listview1);
        $.frmWin.add($.listview2);
        // $.listview1.setVisible(false);
        // $.listview2.setVisible(true);
    } else {
        $.frmWin.remove($.listview2);
        $.frmWin.add($.listview1);
        // $.listview1.setVisible(true);
        // $.listview2.setVisible(false);
    }
    isGrouped = !isGrouped;
};
