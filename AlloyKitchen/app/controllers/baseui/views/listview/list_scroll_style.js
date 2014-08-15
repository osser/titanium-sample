var args = arguments[0] || {};

(function() {
    $.listSection.setItems(getData());
})();

var listView_itemclick = function(e) {
    switch(e.itemIndex ) {
    case 0:
        $.listView.backgroundColor = 'white';
        $.listView.scrollIndicatorStyle = Ti.UI.iPhone.ScrollIndicatorStyle.DEFAULT;
        break;
    case 1:
        $.listView.backgroundColor = 'white';
        $.listView.scrollIndicatorStyle = Ti.UI.iPhone.ScrollIndicatorStyle.BLACK;
        break;
    case 2:
        $.listView.backgroundColor = 'white';
        $.listView.scrollIndicatorStyle = Ti.UI.iPhone.ScrollIndicatorStyle.WHITE;
        break;
    }
};

function getData() {
    var data = [{
        properties : {
            title : 'STYLE DEFAULT'
        }
    }, {
        properties : {
            title : 'STYLE BLACK'
        }
    }, {
        properties : {
            title : 'STYLE WHITE'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }, {
        properties : {
            title : 'Item'
        }
    }];
    return data;
}
