var args = arguments[0] || {};

$.windowstandalone.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT];

var btnOpenPlain_click = function(e) {
    var win = Ti.UI.createWindow({
        title : 'Plain Window',
        backgroundColor : '#eff4ff'
    });
    win.addEventListener('close', function(e) {
        win = null;
    });

    // Create a Button.
    var aButton = Ti.UI.createButton({
        title : '閉じる'
    });

    // Listen for click events.
    aButton.addEventListener('click', function() {
        win.close();
    });

    // Add to the parent view.
    win.add(aButton);

    win.open();
};

var btnTraditionalModel_click = function(e) {

};

var btnOpenAnimationFun_click = function(e) {

};

var btnOpenNavBarVisible_click = function(e) {

};

var btnOpenFullScreen_click = function(e) {

};

var btnOpenToolbar_click = function(e) {

};
