var args = arguments[0] || {};

(function() {
    $.listView.setSections([getInitSection()]);
})();

function getSection(count) {
    var data = [{
        properties : {
            title : 'Insert Above Me ',
            itemId : '0',
            height : 44
        }
    }, {
        properties : {
            title : 'Insert Below Me',
            itemId : '1',
            height : 44
        }
    }];
    var section = Ti.UI.createListSection({
        headerTitle : 'INSERTED SECTION ' + count
    });
    section.setItems(data);
    return section;
}

function getInitSection() {
    var data = [{
        properties : {
            title : 'Insert Above Me ',
            itemId : '0',
            height : 44
        }
    }, {
        properties : {
            title : 'Insert Below Me',
            itemId : '1',
            height : 44
        }
    }, {
        properties : {
            title : '(Test First) Insert One Below. Fail gracefully',
            itemId : '2',
            color : 'red',
            font : {
                fontStyle : 'italic',
                fontSize : 13
            },
            height : 44
        }
    }];
    var section = Ti.UI.createListSection({
        headerTitle : 'SECTION'
    });
    section.setItems(data);
    return section;
}

var insertCount = 0;
var listView_itemclick = function(e) {
    var pos = parseInt(e.itemId) + e.sectionIndex;
    $.listView.insertSectionAt(pos, getSection(insertCount));
    insertCount++;
    if (e.itemId == '2') {
        e.section.replaceItemsAt(e.itemIndex, 1, [{
            properties : {
                title : 'Ok All Good',
                color : 'green',
                font : {
                    fontWeight : 'bold',
                    fontSize : 13
                }
            }
        }]);
    }
};
