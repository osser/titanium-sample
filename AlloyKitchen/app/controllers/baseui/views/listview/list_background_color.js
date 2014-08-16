var args = arguments[0] || {};

(function() {
    $.ls_yellow.setItems(getData('yellow'));
    $.ls_red.setItems(getData('red'));
    if (OS_IOS) {
        $.ls_grouped_no_bg.setItems(getData('yellow'));
        $.ls_grouped_red_bg.setItems(getData('red'));
    }
})();

function getData(word) {
    var data = [{
        template : Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT,
        properties : {
            title : 'My background is yellow',
            backgroundColor : 'yellow'
        }
    }];

    for (var i = 1; i < 20; i++) {
        data.push({
            template : Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT,
            properties : {
                title : word + ' Item ' + i,
                color : '#7e3878'
            }
        });
    }

    return data;
}

var btnPrev_click = function(e) {
    var page = $.scrollView.currentPage - 1;
    if (page < 0) {
        page = 0;
    }
    if (page % 2 == 0) {
        $.lblTitle.setText('ScrollIndicator=true');
    } else {
        $.lblTitle.setText('ScrollIndicator=false');
    }
    $.scrollView.currentPage = page;
};

var btnNext_click = function(e) {
    var page = $.scrollView.currentPage + 1;
    if (page >= $.scrollView.getViews().length) {
        page = $.scrollView.getViews().length - 1;
    }
    console.log($.list_background_color);
    console.log($.btnPrev);
    console.log($.lblTitle);
    console.log($.btnNext);
    if (page % 2 == 0) {
        $.lblTitle.setText('ScrollIndicator=true');
    } else {
        $.lblTitle.setText('ScrollIndicator=false');
    }
    $.scrollView.currentPage = page;
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_background_color',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
