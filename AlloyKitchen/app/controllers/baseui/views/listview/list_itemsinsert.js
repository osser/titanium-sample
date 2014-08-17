var args = arguments[0] || {};

(function() {
    $.listSection1.setItems(getData());
    $.listSection2.setItems(getData());
})();

function getInsertDataIOS(insertCount, sectionIndex, itemIndex, message, animation) {
    var data = [{
        properties : {
            itemId : message
        },
        template : 'myCell',
        mainLabel : {
            text : insertCount + ' Insert at ' + itemIndex + ' in Section ' + sectionIndex + ' Animation ' + animation,
            color : 'red'
        },
        childLabel : {
            text : 'Insert ' + message
        }
    }];
    return data;
}

function getInsertDataAndroid(insertCount, sectionIndex, itemIndex, message) {
    var data = [{
        properties : {
            itemId : message
        },
        template : 'myCell',
        mainLabel : {
            text : insertCount + ' Insert at ' + itemIndex + ' in Section ' + sectionIndex,
            color : 'green'
        },
        childLabel : {
            text : 'Insert ' + message
        }
    }];
    return data;
}

function getData() {
    var data = [{
        properties : {
            title : 'Insert Here',
            itemId : 'Here',
            height : 60,
            color : 'black'
        }
    }, {
        properties : {
            title : 'Insert One Above',
            itemId : 'One Above',
            height : 60,
            color : 'black'
        }
    }, {
        properties : {
            title : 'Insert Below',
            itemId : 'Below',
            height : 60,
            color : 'black'
        }
    }];
    return data;
}

var counter = 1;
var counter1 = 1;
var insertCount = 0;

var listView_itemclick = function(e) {
    var messageArray = ['Here', 'One Above', 'Below'];

    var pos = e.itemIndex;
    if (e.itemId == 'One Above') {
        pos--;
    } else if (e.itemId == 'Below') {
        pos++;
    }
    if (pos < 0) {
        pos = 0;
    }
    counter = counter % 3;
    var message = messageArray[counter];
    counter++;
    var theSection = e.section;

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

        counter1 = counter1 % 6;
        var animation = animationsArray[counter1];
        theSection.insertItemsAt(pos, getInsertDataIOS(insertCount, e.sectionIndex, pos, message, animation), {
            animationStyle : animationStyles[animation]
        });
        counter1++;
    } else {
        theSection.insertItemsAt(pos, getInsertDataAndroid(insertCount, e.sectionIndex, pos, message));
    }
    insertCount++;

};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_itemsinsert',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

