var args = arguments[0] || {};

(function() {
    $.lblInfo.setText('This is a list View that uses a custom template that holds an imageView and a label.\n' + 'The imageView loads remote images. Thank you placehold.it\n' + 'Expected performance is a smooth scroll experience.\n' + 'On scrolling back and forth in the list view, the right image must be loaded.(since we are reusing views)\n\n');
    $.section0.setItems(getData());
})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_performance_remote_images',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};

var btnShowMe_click = function(e) {
    $.frmWin.remove($.lblInfo);
    $.frmWin.remove($.btnShowMe);
    $.listView.setVisible(true);
};

function getData() {
    var data = [];
    var baseUrl = 'http://placehold.it/';
    var imageUrl;
    for ( i = 30; i <= 60; i++) {
        for ( j = 30; j <= 60; j++) {
            imageUrl = baseUrl + i + 'x' + j;
            data.push({
                avatar : {
                    image : imageUrl
                },
                info : {
                    text : 'Loading Url\n' + imageUrl
                }
            });
        }
    }
    return data;
}