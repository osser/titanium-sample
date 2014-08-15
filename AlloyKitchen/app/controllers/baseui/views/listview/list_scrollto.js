var args = arguments[0] || {};

(function() {
    $.listView.setSections(getSections());
})();

function getData(section) {
    var data = [];
    for (var i = 0; i < 10; i++) {
        data.push({
            properties : {
                title : 'Section ' + section + ' Item ' + i,
                color : 'black'
            }
        });
    }
    return data;
}

function getSections() {
    var sections = [];
    for (var i = 0; i < 10; i++) {
        var section = Ti.UI.createListSection({
            headerTitle : 'Section ' + i
        });
        section.setItems(getData(i));
        sections.push(section);
    }
    return sections;
}

var btnScrollToRandom_click = function(e) {
    var sectionIndex = Math.floor(Math.random() * 173) % 10;
    var itemIndex = Math.floor(Math.random() * 83) % 10;
    if (OS_IOS) {

    } else {

    }
    $.lblInfo.setText('scrollToItem(' + sectionIndex + ',' + itemIndex + ')');
    if (OS_IOS)
        $.listView.scrollToItem(sectionIndex, itemIndex, {
            position : Ti.UI.iPhone.ListViewScrollPosition.TOP
        });
    else
        $.listView.scrollToItem(sectionIndex, itemIndex);
};
