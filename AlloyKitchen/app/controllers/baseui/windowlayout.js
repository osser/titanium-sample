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
