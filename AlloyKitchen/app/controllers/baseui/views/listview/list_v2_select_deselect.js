var args = arguments[0] || {};

(function() {
    $.listView.sections = genSections();
})();

function genData(section) {
    var data = [];
    for ( i = 0; i < 10; i++) {
        data.push({
            properties : {
                title : 'Section ' + section + ' Item ' + i
            }
        });
    }
    return data;
}

function genSections() {
    var sections = [];
    for ( j = 0; j < 10; j++) {
        var section = Ti.UI.createListSection({
            headerTitle : 'Section ' + j
        });
        section.setItems(genData(j));
        sections.push(section);
    }
    return sections;
}

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_v2_select_deselect',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var sectionIndex;
var itemIndex;

var btnB1_click = function(e) {
    sectionIndex = Math.floor(Math.random() * 173) % 10;
    itemIndex = Math.floor(Math.random() * 83) % 10;
    $.listView.selectItem(sectionIndex, itemIndex);
    $.btnB2.enabled = true;
};

var btnB2_click = function(e) {
    $.listView.deselectItem(sectionIndex, itemIndex);
    $.btnB2.enabled = false;
};

var listView_click = function(e) {
    sectionIndex = e.sectionIndex;
    itemIndex = e.itemIndex;
    $.btnB2.enabled = true;
};
