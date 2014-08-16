var args = arguments[0] || {};

var form_click = function(e) {
    $.lblInfo1.setText(e.source.text + ', ' + format2D(e.x) + ', ' + format2D(e.y));
};
var view_click = function(e) {
    $.lblInfo2.setText(e.source.text + ', ' + format2D(e.x) + ', ' + format2D(e.y));
};

function format2D(num) {
    return String.formatDecimal(num, 'en-US', '0.00');
}

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/events_propagation',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
