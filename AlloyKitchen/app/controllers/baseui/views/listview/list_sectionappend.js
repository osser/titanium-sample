var args = arguments[0] || {};

(function() {

})();

var appendCount = 0;

function getSection(count) {
    var data = [{
        properties : {
            title : 'ITEM 0 in Section ' + count
        }
    }, {
        properties : {
            title : 'ITEM 1 in Section ' + count,
            color : 'purple'
        }
    }, {
        properties : {
            title : 'ITEM 2 in Section ' + count
        }
    }];
    var section = Ti.UI.createListSection({
        headerTitle : 'Section ' + count
    });
    section.setItems(data);
    return section;
}

var btnAppend_click = function(e) {
    $.listView.appendSection(getSection(appendCount));
    $.listView.scrollToItem(appendCount, 2);
    appendCount++;
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_sectionappend',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
