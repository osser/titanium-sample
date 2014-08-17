var args = arguments[0] || {};

(function() {
    $.listSection.setItems(getData());
})();

var counter1 = 1;
var listView_itemclick = function(e) {
    if (e.itemId !== undefined && e.itemId !== null) {
        var deleteCount = parseInt(e.itemId);
        var pos = e.itemIndex;
        var theSection = e.section;
        if (deleteCount == 101) {
            pos = 1000;
        }
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
            theSection.deleteItemsAt(pos, deleteCount, {
                animationStyle : animationStyles[animation]
            });
            counter1++;
        } else {
            theSection.deleteItemsAt(pos, deleteCount);
        }
    }
};

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
            title : 'bad index=100. check parity',
            itemId : '101',
            height : 44
        }
    }, {
        properties : {
            title : 'Delete Two',
            itemId : '2',
            height : 44,
            color : 'green'
        }
    }, {
        properties : {
            title : 'I will go too',
            height : 44
        }
    }, {
        properties : {
            title : 'Item',
            height : 44
        }
    }, {
        properties : {
            title : 'Item',
            height : 44
        }
    }, {
        properties : {
            title : 'Delete Two',
            itemId : '2',
            height : 44
        }
    }, {
        properties : {
            title : 'I will go too',
            height : 44
        }
    }, {
        properties : {
            title : 'Item',
            height : 44
        }
    }, {
        properties : {
            title : 'Delete Me',
            itemId : '1',
            height : 44
        }
    }, {
        properties : {
            title : 'Item',
            height : 44
        }
    }, {
        properties : {
            title : 'Item',
            height : 44
        }
    }, {
        properties : {
            title : 'Delete Me',
            itemId : '1',
            height : 44
        }
    }, {
        properties : {
            title : 'Item',
            height : 44
        }
    }, {
        properties : {
            title : 'Delete Two',
            itemId : '2',
            height : 44
        }
    }, {
        properties : {
            title : 'I will go too',
            height : 44
        }
    }, {
        properties : {
            title : 'Item',
            height : 44
        }
    }, {
        properties : {
            title : 'Delete Me',
            itemId : '1',
            height : 44
        }
    }, {
        properties : {
            title : 'Item',
            height : 44
        }
    }, {
        properties : {
            title : 'Item',
            height : 44
        }
    }, {
        properties : {
            title : 'Delete Me',
            itemId : '1',
            height : 44
        }
    }, {
        properties : {
            title : 'Item',
            height : 44
        }
    }, {
        properties : {
            title : 'Delete Me',
            itemId : '1',
            height : 44
        }
    }, {
        properties : {
            title : 'excesive count=100. check parity',
            itemId : '100',
            height : 44
        }
    }, {
        properties : {
            title : 'Item',
            height : 44
        }
    }, {
        properties : {
            title : 'Item',
            height : 44
        }
    }, {
        properties : {
            title : 'Item',
            height : 44
        }
    }];
    return data;
}

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_itemsdelete',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

