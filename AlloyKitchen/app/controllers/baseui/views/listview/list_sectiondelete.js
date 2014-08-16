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
