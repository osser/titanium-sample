var args = arguments[0] || {};

(function() {
    var data = [];
    var i = 1;
    for ( i = 1; i < 10; i++) {
        data.push({
            properties : {
                title : 'ROW ' + i,
                color : '#b91d47'
            }
        });
    }
    $.section0.setItems(data);
    console.log('$.imageView.image.nativePath', $.imageView.image);
})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_v2_custom_header_footer',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
