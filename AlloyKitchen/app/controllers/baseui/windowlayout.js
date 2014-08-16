var args = arguments[0] || {};
var view_click = function(e) {
    $.txtFirstName.blur();
    $.txtLastName.blur();
};

var txtFirstName_click = function(e) {
    e.cancelBubble = 1;
};

var txtLastName_click = function(e) {
    e.cancelBubble = 1;
};

var btnSave_click = function(e) {
    alert($.txtFirstName.getValue() + ", " + $.txtLastName.getValue());
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/windowlayout',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
