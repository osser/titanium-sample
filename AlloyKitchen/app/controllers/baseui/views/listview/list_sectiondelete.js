var args = arguments[0] || {};

(function() {
    var sections = [];
    for (var i = 0; i < 20; i++) {
        sections.push(getSection(i));
    }
    $.listView.sections = sections;
})();

function getSection(count) {
    var data = [{
        properties : {
            title : 'Delete Section ' + count,
            height : 44
        }
    }];
    var section = Ti.UI.createListSection({
        headerTitle : 'Section Header ' + count
    });
    section.setItems(data);
    return section;
}

var listView_itemclick = function(e) {
    $.listView.deleteSectionAt(e.sectionIndex);
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_sectiondelete',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
