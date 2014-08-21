var args = arguments[0] || {};

var styleData = [];
var colorData = ['gray', 'red', 'green', 'blue', 'yellow', 'transparent'];
var styleCounter = 0;
var colorCounter = 0;

(function() {
    if (OS_IOS) {
        styleData = [Ti.UI.iPhone.ListViewSeparatorStyle.SINGLE_LINE, Ti.UI.iPhone.ListViewSeparatorStyle.NONE];
    }

    var data = [];
    var i = 1;
    for ( i = 1; i < 100; i++) {
        data.push({
            properties : {
                title : 'ROW ' + i,
                color : 'black'
            }
        });
    }
    $.section0.setItems(data);

    $.listView.setSeparatorColor(colorData[colorCounter]);
    if (OS_IOS)
        $.listView.setSeparatorStyle(styleData[styleCounter]);

    updateLabel();
})();

function updateLabel() {
    var text = 'Separator Color is ' + colorData[colorCounter];
    if (OS_IOS) {
        text = text + ' Separator Style is ';
        if (styleCounter == 0) {
            text += 'Single Line';
        } else {
            text += 'None';
        }
    }
    $.lblStatus.setText(text);
}

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_v2_custom_separator',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var b1_click = function(e) {
    styleCounter = (styleCounter + 1) % styleData.length;
    $.listView.separatorStyle = styleData[styleCounter];
    updateLabel();
};

var b2_click = function(e) {
    colorCounter = (colorCounter + 1) % colorData.length;
    $.listView.separatorColor = colorData[colorCounter];
    updateLabel();
};
