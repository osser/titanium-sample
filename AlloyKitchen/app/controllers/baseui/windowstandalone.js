var args = arguments[0] || {};

$.windowstandalone.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT];

var isIOS7 = true;

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
    var t = Titanium.UI.create2DMatrix();
    t = t.scale(0);

    var w = Titanium.UI.createWindow({
        backgroundColor : '#336699',
        borderWidth : 5,
        borderColor : '#2d89ef',
        height : $.windowstandalone.height,
        width : $.windowstandalone.width,
        borderRadius : 10,
        opacity : 0.9,
        transform : t
    });

    // create first transform to go beyond normal size
    var t1 = Titanium.UI.create2DMatrix();
    t1 = t1.scale(1.1);
    var a = Titanium.UI.createAnimation();
    a.transform = t1;
    a.duration = 200;

    // when this animation completes, scale to normal size
    a.addEventListener('complete', function() {
        Titanium.API.info('here in complete');
        var t2 = Titanium.UI.create2DMatrix();
        t2 = t2.scale(1.0);
        w.animate({
            transform : t2,
            duration : 200
        });
    });

    // create a button to close window
    var b = Titanium.UI.createButton({
        title : 'Close',
        height : 30,
        width : 150,
        color : 'white',
        font : {
            fontSize : 22,
            fontFamily : 'Oswald-Regular'
        }
    });
    w.add(b);
    b.addEventListener('click', function() {
        var t3 = Titanium.UI.create2DMatrix();
        t3 = t3.scale(0);
        w.close({
            transform : t3,
            duration : 300
        });
    });
    w.open(a);
};

var btnOpenNavBarVisible_click = function(e) {
    var w = Titanium.UI.createWindow({
        top : Ti.Platform.displayCaps.platformHeight,
        backgroundColor : '#000',
    });

    // create window open animation
    var a = Titanium.UI.createAnimation();
    // if (isIOS7) {
    // a.top = Ti.Platform.displayCaps.platformHeight - $.windowstandalone.size.height;
    // } else {
    // a.top = Ti.Platform.displayCaps.platformHeight - $.windowstandalone.size.height - 20;
    // }
    a.top = 0;
    a.duration = 300;

    // create a button to close window
    var b = Titanium.UI.createButton({
        title : 'Close',
        height : 30,
        width : 150,
        font : {
            fontSize : 24,
            fontFamily : 'Oswald-Regular'
        }
    });
    w.add(b);
    b.addEventListener('click', function() {
        a.top = Ti.Platform.displayCaps.platformHeight;
        w.close(a);
    });

    Ti.Gesture.addEventListener('orientationchange', function(e) {
        w.top = 0;
    });
    Ti.App.addEventListener('nav_back', function(e) {
        w.close();
    });
    w.addEventListener('close', function(e) {
        Ti.Gesture.removeEventListener('orientationchange', function(e) {
            w.top = 0;
        });
        Ti.App.removeEventListener('nav_back', function(e) {
            w.close();
        });
    });

    w.open(a);
};

var btnOpenFullScreen_click = function(e) {
    var win = Ti.UI.createWindow({
        title : 'New Window (FullScreen)',
        backgroundColor : '#369'
    });

    // Create a Button.
    var aButton = Ti.UI.createButton({
        title : 'Close',
        color : 'white',
        font : {
            fontSize : 24,
            fontFamily : 'Oswald-Regular'
        }
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
    var label = Titanium.UI.createButton({
        title : 'Custom Toolbar',
        color : '#fff',
        style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN
    });

    var flexSpace = Titanium.UI.createButton({
        systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    var close = Titanium.UI.createButton({
        title : 'Close',
        style : Titanium.UI.iPhone.SystemButtonStyle.DONE
    });
    var hello = Titanium.UI.createButton({
        title : 'Hello',
        style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    var w = Titanium.UI.createWindow({
        backgroundColor : '#336699'
    });
    close.addEventListener('click', function() {
        Ti.API.info('IN HERE');
        w.close();
    });
    if (isIOS7) {
        theTop = 20;
    } else {
        theTop = 0;
    }
    // create and add toolbar
    var toolbar = Titanium.UI.iOS.createToolbar({
        items : [hello, flexSpace, label, flexSpace, close],
        top : theTop,
        borderTop : false,
        borderBottom : true
    });
    w.add(toolbar);
    var move = Titanium.UI.createButton({
        title : 'Move Toolbar',
        height : 40,
        width : 200,
        color : 'white',
        font : {
            fontSize : 24,
            fontFamily : 'Oswald-Regular'
        }
    });
    w.add(move);
    move.addEventListener('click', function() {
        if (isIOS7) {
            toolbar.animate({
                top : 40,
                duration : 500
            });
        } else {
            toolbar.animate({
                top : 20,
                duration : 500
            });
        }
    });
    w.open();
};

var btnRight_click = function(e) {
    $.windowstandalone.close();
};

var btnOpenWin1_click = function(e) {
    var win = Ti.UI.createWindow({
        backgroundColor : '#369'
    });
    var btn = Ti.UI.createButton({
        title : '閉じる（動画効果）'
    });
    btn.addEventListener('click', function(e) {
        win.close({
            animated : true
        });
        win = null;
    });
    win.add(btn);
    args.parentTab.open(win, {
        animated : true
    });
};

var btnOpenWin2_click = function(e) {
    var win = Ti.UI.createWindow({
        backgroundColor : '#369'
    });
    var btn = Ti.UI.createButton({
        title : '閉じる（動画効果）'
    });
    btn.addEventListener('click', function(e) {
        win.close({
            animated : false
        });
        win = null;
    });
    win.add(btn);
    args.parentTab.open(win, {
        animated : false
    });
};

var btnOpenWin3_click = function(e) {
    Ti.Media.showCamera({
        success : function(event) {
            // called when media returned from the camera
            Ti.API.debug('Our type was: ' + event.mediaType);
            if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                var imageView = Ti.UI.createImageView({
                    width : $.windowstandalone.width,
                    height : $.windowstandalone.height,
                    image : event.media
                });
                $.windowstandalone.add(imageView);
            } else {
                alert("got the wrong type back =" + event.mediaType);
            }
        },
        cancel : function() {
            // called when user cancels taking a picture
        },
        error : function(error) {
            // called when there's an error
            var a = Titanium.UI.createAlertDialog({
                title : 'Camera'
            });
            if (error.code == Titanium.Media.NO_CAMERA) {
                a.setMessage('Please run this test on device');
            } else {
                a.setMessage('Unexpected error: ' + error.code);
            }
            a.show();
        },
        saveToPhotoGallery : true,
        // allowEditing and mediaTypes are iOS-only settings
        allowEditing : true,
        mediaTypes : [Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO]
    });
};
