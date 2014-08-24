var args = arguments[0] || {};

(function() {
    // orientation change listener
    Ti.Gesture.addEventListener('orientationchange', function(e) {
        // get orienation from event object
        var orientation = getOrientation(e.orientation);
    });

})();

function getOrientation(o) {//Came from orientation.js, but we didn't need the buttons and such
    switch (o) {
    case Titanium.UI.PORTRAIT:
        return 'portrait';
    case Titanium.UI.UPSIDE_PORTRAIT:
        return 'upside portrait';
    case Titanium.UI.LANDSCAPE_LEFT:
        return 'landscape left';
    case Titanium.UI.LANDSCAPE_RIGHT:
        return 'landscape right';
    case Titanium.UI.FACE_UP:
        return 'face up';
    case Titanium.UI.FACE_DOWN:
        return 'face down';
    case Titanium.UI.UNKNOWN:
        return 'unknown';
    }
}

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/scrollview/scroll_views_scrollable',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
