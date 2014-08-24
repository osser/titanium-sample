var args = arguments[0] || {};

var showurl = '';

(function() {
    console.log('sourceUrl:', args.sourceUrl);
    console.log('$.toolBar.height:', $.toolBar.height);
    showurl = args.sourceUrl;
    btnShowController_click(null);
})();

var frm_close = function(e) {
    $.webView = null;
    $.webshow = null;
};

var showToolBar = function(e) {
    console.log('1', $.toolBar.visible, !$.toolBar.visible);
    $.toolBar.visible = !$.toolBar.visible;
    console.log('2', $.toolBar.visible, !$.toolBar.visible);
};

function btnShowStyle_click(e) {
    $.webView.url = 'https://github.com/osser/titanium-sample/blob/master/AlloyKitchen/app/styles/' + args.sourceUrl + '.tss';
};

function btnShowController_click(e) {
    $.webView.url = 'https://github.com/osser/titanium-sample/blob/master/AlloyKitchen/app/controllers/' + args.sourceUrl + '.js';
};

function btnShowView_click(e) {
    $.webView.url = 'https://github.com/osser/titanium-sample/blob/master/AlloyKitchen/app/views/' + args.sourceUrl + '.xml';
};
