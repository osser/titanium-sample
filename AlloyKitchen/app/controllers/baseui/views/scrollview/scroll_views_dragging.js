var args = arguments[0] || {};

(function() {

})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/scrollview/scroll_views_dragging',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var scrollView_dragstart = function(e) {
    Ti.API.info('Drag started');
    $.message1.text = "Drag Started!";
    $.message1.show();
    setTimeout(function() {
        $.message1.hide();
    }, 1000);

};

var scrollView_dragend = function(e) {
    Ti.API.info(e.type + ' detected! Decelerating? ' + (e.decelerate ? 'Yes' : 'No'));
    $.message2.text = e.type + " detected! Decelerating :" + (e.decelerate ? 'Yes' : 'No');
    $.message2.show();
    setTimeout(function() {
        $.message2.hide();
    }, 1000);

};

