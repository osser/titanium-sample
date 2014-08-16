var args = arguments[0] || {};
var btnChangeBGColor_click = function(e) {
    $.windowproperties.backgroundImage = null;
    $.windowproperties.backgroundColor = "#336699";
};

var btnChangeBGImage_click = function(e) {
    $.windowproperties.backgroundImage = 'bg.jpg';
};

var isFull = true;
var oldColor = null;
var btnToggleHeightWidth_click = function(e) {
    if (isFull) {
        oldColor = $.windowproperties.backgroundColor;
        $.windowproperties.height = '50%';
        $.windowproperties.width = '50%';
        $.windowproperties.backgroundColor = 'teal';
        isFull = false;
    } else {
        $.windowproperties.height = null;
        $.windowproperties.width = null;
        $.windowproperties.backgroundColor = oldColor;
        isFull = true;
    }
};

var opacity = true;
var btnToggleOpacity_click = function(e) {
    if (opacity) {
        $.windowproperties.opacity = 0.5;
        opacity = false;
    } else {
        $.windowproperties.opacity = 1;
        opacity = true;
    }
};

var layout = true;
var win1 = null;
var win2 = null;
var btnLayoutDimension_click = function(e) {
    if (layout) {
        layout = false;

        win1 = Ti.UI.createWindow({
            height : 50,
            width : 200,
            bottom : 50,
            left : 10,
            backgroundColor : 'fuchsia',
            borderRadius : 3,
            zIndex : 3
        });

        win2 = Ti.UI.createWindow({
            height : 50,
            width : 200,
            bottom : 70,
            left : 30,
            backgroundColor : 'pink',
            borderRadius : 5,
            zIndex : 1
        });

        win1.open();
        win2.open();
        layout = false;

        $.windowproperties.addEventListener('close', function() {
            win1.close();
            win2.close();
            layout = true;
        });
    } else {
        win1.close();
        win2.close();
        layout = true;
    }
};

var border = true;
var btnToggleBorder_click = function(e) {
    if (border) {
        $.windowproperties.borderWidth = 5;
        $.windowproperties.borderColor = 'lime';
        $.windowproperties.borderRadius = 5;
        border = false;
    } else {
        $.windowproperties.borderWidth = 0;
        $.windowproperties.borderColor = null;
        $.windowproperties.borderRadius = 0;
        border = true;
    }
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/windowproperties',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
