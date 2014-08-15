var args = arguments[0] || {};

(function() {
    $.view1.setSections(getSections());

})();

function getData(section) {
    var data = [];
    for (var i = 0; i < 5; i++) {
        data.push({
            template : Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT,
            properties : {
                title : 'Section ' + section + ' Item ' + i,
                color : '#1e7145'
            }
        });
    }
    return data;
}

function getSections() {
    var section1 = Ti.UI.createListSection({
        headerTitle : 'Section 1 Header',
        footerTitle : 'Section 1 Footer'
    });
    var section2 = Ti.UI.createListSection({
        headerTitle : 'Section 2 Header'
    });
    var section3 = Ti.UI.createListSection({
        footerTitle : 'Section 3 Footer'
    });
    var section4 = Ti.UI.createListSection({});

    section1.setItems(getData(1));
    section2.setItems(getData(2));
    section3.setItems(getData(3));
    section4.setItems(getData(4));

    return [section1, section2, section3, section4];
}

function getListView(style) {
    return Ti.UI.createListView({
        style : style,
        sections : getSections(),
        headerTitle : 'This is list view header.',
        footerTitle : 'This is list view footer. Should be at bottom.'
    });
}

var btnShowGrouped_click = function(e) {
    $.list_headers_footers.remove($.view1);
    $.view1 = null;
    $.view1 = getListView(Ti.UI.iPhone.ListViewStyle.GROUPED);
    $.list_headers_footers.add($.view1);
    $.btnShowGrouped.enabled = false;
};
