var args = arguments[0] || {};

(function() {
    $.listView.sections = genSections();
})();

function genData(section) {
    var data = [];
    for ( i = 0; i < 5; i++) {
        data.push({
            properties : {
                title : 'Section ' + section + ' Item ' + i,
                backgroundColor : 'white',
                color : 'blue'
            }
        });
    }
    return data;
}

function genSections() {
    var sections = [];
    for ( j = 0; j < 5; j++) {
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
        sourceUrl : 'baseui/views/listview/list_v2_ui_misc',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var canScroll = true;
var zeroInsets = true;
var animate = true;

var btnCanScroll_click = function(e) {
    canScroll = !canScroll;
    $.listView.canScroll = canScroll;
};

var btnInsets_click = function(e) {
    if (zeroInsets == true) {
        $.listView.setContentInsets({
            top : 20,
            bottom : 20
        }, {
            animated : animate
        });
    } else {
        $.listView.setContentInsets({
            top : 0,
            left : 0,
            right : 0,
            bottom : 0
        }, {
            animated : animate
        });
        animate = !animate;
    }
    zeroInsets = !zeroInsets;

};
