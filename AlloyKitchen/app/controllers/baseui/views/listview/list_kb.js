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
