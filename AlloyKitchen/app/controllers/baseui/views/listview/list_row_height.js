var args = arguments[0] || {};

(function() {
    // var myTemplate = {
    // properties : {
    // height : 60
    // },
    // childTemplates : [{
    // type : 'Ti.UI.Label',
    // bindId : 'cellLabel',
    // properties : {
    // color : 'red',
    // highlightedColor : 'white',
    // font : {
    // fontSize : 14,
    // fontWeight : 'bold'
    // },
    // width : Ti.UI.FILL,
    // height : Ti.UI.FILL
    // }
    // }]
    // };
    // $.listView.templates = {
    // 'myCell' : myTemplate
    // };

    var data = [{
        template : Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT,
        properties : {
            title : 'I have no height property.'
        }
    }, {
        template : Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT,
        properties : {
            title : 'My height is 100.',
            height : 100,
            color : '#ff0097'
        }
    }, {
        template : 'myCell',
        cellLabel : {
            text : 'My height is coming from the template. My color when highlighted must be white on iOS.'
        }
    }, {
        template : 'myCell',
        properties : {
            height : 100
        },
        cellLabel : {
            highlightedColor : 'green',
            color : 'white',
            text : 'My height is coming from properties of the item. My be 100. My color when highlighted must be green on iOS.',
            backgroundColor : 'gray'
        }
    }, {
        template : 'myCell',
        properties : {
            height : 150
        },
        cellLabel : {
            text : 'iOS only supports absolute heights. No FILL, SIZE, PERCENT, AUTO SUPPORT',
            font : {
                fontSize : 20,
                fontWeight : 'bold'
            },
            backgroundColor : 'red',
            color : 'white'
        }
    }];

    $.listSection.setItems(data);

})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_row_height',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
