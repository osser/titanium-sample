var args = arguments[0] || {};

(function() {

})();

function getData(thetitle) {
    var data = [];
    for (var i = 0; i < 10; i++) {
        data.push({
            properties : {
                title : thetitle
            }
        });
    }
    return data;
}

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_itemsset',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var interval = null;
var i = 0;

var btnStartTest_click = function(e) {
    var animationStyles = {
        'None' : Ti.UI.iPhone.RowAnimationStyle.NONE,
        'Left' : Ti.UI.iPhone.RowAnimationStyle.LEFT,
        'Right' : Ti.UI.iPhone.RowAnimationStyle.RIGHT,
        'Top' : Ti.UI.iPhone.RowAnimationStyle.TOP,
        'Bottom' : Ti.UI.iPhone.RowAnimationStyle.BOTTOM,
        'Fade' : Ti.UI.iPhone.RowAnimationStyle.FADE,
    };
    var animationsArray = ['None', 'Left', 'Right', 'Top', 'Bottom', 'Fade'];

    $.btnStartTest.enabled = false;
    interval = setInterval(function() {
        var type = animationsArray[i];
        $.listSection.setItems(getData('Animation Style ' + type), {
            animationStyle : animationStyles[type]
        });
        console.log(i, 'Animation Style ', type);
        i = (i + 1) % animationsArray.length;
        console.log('next i:', i);
    }, 1000);
};

var frm_close = function(e) {
    if (interval !== null) {
        clearInterval(interval);
    }
};
