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
