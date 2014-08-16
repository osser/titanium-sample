var args = arguments[0] || {};

(function() {
    $.listView.setSections(getInitSection());
})();

function getSection(replaceCount) {
    var data = [{
        properties : {
            title : 'I am Replaced',
            itemId : '0',
            height : 44,
            color : '#1e7145'
        }
    }];
    var section = Ti.UI.createListSection({
        headerTitle : 'REPLACED SECTION ' + replaceCount
    });
    section.setItems(data);
    return section;
}

function getInitSection() {
    var sections = [];
    for ( i = 0; i < 10; i++) {
        var data = [{
            properties : {
                title : 'Replace',
                itemId : '1',
                height : 44,
                color : '#2b5797'
            }
        }];
        var section = Ti.UI.createListSection({
            headerTitle : 'REPLACE SECTION'
        });
        section.setItems(data);
        sections.push(section);
    }
    return sections;
}

var replaceCount = 0;

var listView_itemclick = function(e) {
    if (e.itemId == '1') {
        $.listView.replaceSectionAt(e.sectionIndex, getSection(replaceCount));
        replaceCount++;
    }
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_sectionreplace',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
