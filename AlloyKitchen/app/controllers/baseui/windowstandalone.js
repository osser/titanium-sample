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
    var win = Ti.UI.createWindow({
        title : 'Vibrate',
        backgroundColor : '#336699',
        layout : 'vertical'
    });
    win.addEventListener('close', function(e) {
        win = null;
    });
    // Create a Button.
    var aButton = Ti.UI.createButton({
        top : 80,
        width : '60%',
        backgroundColor : '#eff4ff',
        color : 'black',
        title : '閉じる'
    });
    // Listen for click events.
    aButton.addEventListener('click', function() {
        win.close();
    });
    // Add to the parent view.
    win.add(aButton);

    // Create a Button.
    var bButton = Ti.UI.createButton({
        top : 40,
        width : '60%',
        backgroundColor : '#99b433',
        title : 'Vibrate'
    });
    // Listen for click events.
    bButton.addEventListener('click', function() {
        Ti.Media.vibrate([0, 1000]);
    });
    // Add to the parent view.
    win.add(bButton);

    win.open();
};

var btnOpenAnimationFun_click = function(e) {

};

var btnOpenNavBarVisible_click = function(e) {

};

var btnOpenFullScreen_click = function(e) {
    var win = Ti.UI.createWindow({
        title : 'New Window (FullScreen)',
        backgroundColor : '#369'
    });

    // Create a Button.
    var aButton = Ti.UI.createButton({
        title : 'Close',
        color : 'white'
    });
    // Listen for click events.
    aButton.addEventListener('click', function() {
        win.close();
    });
    // Add to the parent view.
    win.add(aButton);

    win.open({
        fullscreen : true
    });
};

var btnOpenToolbar_click = function(e) {

};
