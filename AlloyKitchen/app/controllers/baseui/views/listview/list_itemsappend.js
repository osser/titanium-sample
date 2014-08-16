var args = arguments[0] || {};

function getData(thetitle) {
    var data = [{
        properties : {
            title : 'Item - Animation ' + thetitle
        }
    }];
    return data;
}

function getDataAndroid() {
    var data = [];
    for (var i = 0; i < 2; i++) {
        data.push({
            properties : {
                title : 'Appended ' + i,
                color : '#b91d47'
            }
        });
    }
    return data;
}

var interval = null;
var i = 0;

var btnStartTest_click = function(e) {

    $.btnStartTest.enabled = false;
    interval = setInterval(function() {
        if (OS_IOS) {
            var animationStyles = {
                'None' : Ti.UI.iPhone.RowAnimationStyle.NONE,
                'Left' : Ti.UI.iPhone.RowAnimationStyle.LEFT,
                'Right' : Ti.UI.iPhone.RowAnimationStyle.RIGHT,
                'Top' : Ti.UI.iPhone.RowAnimationStyle.TOP,
                'Bottom' : Ti.UI.iPhone.RowAnimationStyle.BOTTOM,
                'Fade' : Ti.UI.iPhone.RowAnimationStyle.FADE,
            };
            var animationsArray = ['None', 'Left', 'Right', 'Top', 'Bottom', 'Fade'];
            var type = animationsArray[i];
            $.listSection.appendItems(getData(type), {
                animationStyle : animationStyles[type]
            });
            i = (i + 1) % animationsArray.length;
        } else {
            $.listSection.appendItems(getDataAndroid());
        }
    }, 1000);

};

var frm_close = function(e) {
    if (interval !== null) {
        clearInterval(interval);
    }
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_itemsappend',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

