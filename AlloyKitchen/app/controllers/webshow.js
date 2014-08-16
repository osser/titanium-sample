var args = arguments[0] || {};

(function() {
    console.log('sourceUrl:', args.sourceUrl);
    //https://github.com/osser/titanium-sample/blob/master/AlloyKitchen/app/views/baseui/tabgroups.xml
    //$.webView.url = 'https://github.com/osser/titanium-sample/blob/master/AlloyKitchen/app/views/' + args.sourceUrl + '.xml';
    $.webView.url = 'https://github.com/osser/titanium-sample/blob/master/AlloyKitchen/app/controllers/' + args.sourceUrl + '.js';
})();
