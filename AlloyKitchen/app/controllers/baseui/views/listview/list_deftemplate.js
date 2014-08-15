var args = arguments[0] || {};

(function() {
    var data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    $.listSection.setItems(data);

    var defTemplate = 'one';
    if (Ti.Gesture.isLandscape()) {
        defTemplate = 'two';
    }

    $.listView.defaultItemTemplate = defTemplate;

    Ti.Gesture.addEventListener('orientationchange', updateDefault);
})();

function updateDefault() {
    if ($.frmWin.orientation != Ti.UI.PORTRAIT) {
        $.listView.defaultItemTemplate = 'two';
    } else {
        $.listView.defaultItemTemplate = 'one';
    }
}

var form_close = function(e) {
    Ti.Gesture.removeEventListener('orientationchange', updateDefault);
};
