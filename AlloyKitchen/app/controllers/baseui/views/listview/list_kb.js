var args = arguments[0] || {};

(function() {
    if (OS_IOS) {
        $.frmWin.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT];
    }

    var data = [];
    for (var i = 0; i < 100; i++) {
        data.push({
            template : 'myCell',
            bindField : {
                value : 'Field ' + i
            }
        });
    }
    $.listSection.setItems(data);
})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_kb',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
