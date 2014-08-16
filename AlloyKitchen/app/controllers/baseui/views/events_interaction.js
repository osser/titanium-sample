var args = arguments[0] || {};
var lblClickMe_click = function(e) {
    $.lblLabel.setText('You were able to click on the label. Good!');
    setTimeout(function() {
        $.lblLabel.setText('click on label');
    }, 2000);
};

var v8_click = function(e) {
    $.lblBox.setText('You were able to click on the box. Good!');
    setTimeout(function() {
        $.lblBox.setText('click on box');
    }, 2000);
};

var form_click = function(e) {
    $.lblWin.setText('You were able to click on the window. Good!');
    setTimeout(function() {
        $.lblWin.setText('click on window');
    }, 2000);
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/events_interaction',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
