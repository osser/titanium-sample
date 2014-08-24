var args = arguments[0] || {};

(function() {
    console.log(args);

    switch(args.item.properties.formid) {
    case 'ExternalURL':
        $.webView.url = "http://www.google.co.jp";
        break;
    case 'LocalURL':
        $.webView.url = '/etc/local_webview.html';
        break;
    case 'XHRtoFilesystem':
        {
            var xhr = Titanium.Network.createHTTPClient();
            var baseURL = 'http://osser.jp';
            xhr.onload = function() {
                $.webView.setHtml(this.responseText, {
                    baseURL : baseURL
                });
            };
            // open the client
            xhr.open('GET', baseURL);
            // google will send back WAP if you make XHR request to it and he doesn't think it's really an HTML browser
            // we're going to spoof him to think we're Safari on iPhone
            xhr.setRequestHeader('User-Agent', 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A537a Safari/419.3');
            // send the data
            xhr.send();
        }
        break;
    case 'ImageURL':
        $.webView.url = 'http://nodejs.osser.jp/images/books/nodejs_in_action.jpg';
        break;
    case 'InlineHTML':
        $.webView.html = "<html><body bgcolor='#2d89ef'><font color='#eff4ff' size=5>Hello from inline HTML.</font></body></html>";
        break;
    case 'InlineHTMLTransBg':
        $.webView.html = '<html><body><div style="color:white;">Hello from inline HTML. You should see white text and black background</div></body></html>';
        $.webView.backgroundColor = 'red';
        break;
    case 'InlineHTMLColorBg':
        $.webView.html = '<html><body bgcolor="#eff4ff"><div style="color:red;">Hello from inline HTML. You should see red text and yellow background</div></body></html>';
        $.webView.backgroundColor = 'yellow';
        break;
    case 'BasicAuth':
        $.webView.url = 'http://www.google.co.jp/';
        $.webView.setBasicAuthentication('test', 'this');
        break;
    case 'LoggingandUnicode':
        $.webView.url = '/etc/webview_logging.html';
        break;
    case 'LocalEval':
        $.webView.url = "/etc/local_webview.html";
        alert("JS result was: " + $.webView.evalJS("window.my_global_variable") + ". should be 10");
        break;
    case 'LocalHTML':
        $.webView.url = '/etc/local_webview.html';
        alert("HTML is: " + $.webView.html);
        break;
    case 'InlineHTMLBorder':
        $.webView.html = '<html><body><div>Hello from inline HTML. You should see red border</div></body></html>';
        $.webView.borderRadius = 30;
        $.webView.borderWidth = 5;
        $.webView.borderColor = 'red';
        break;
    case 'PDFURL':
        $.webView.url = 'http://www.appcelerator.com/assets/The_iPad_App_Wave.pdf';
        break;
    case 'SVGURL':
        $.webView.url = 'http://upload.wikimedia.org/wikipedia/commons/5/55/1st_Cavalry_Division_-_Shoulder_Sleeve_Insignia.svg';
        break;
    case 'Localimage':
        $.webView.url = '/common/cloud.png';
        break;
    case 'LocalSVG':
        $.webView.url = '/common/insignia.svg';
        break;
    case 'LocalPinchZoom':
        $.webView.url = '/etc/local_webview_pinchzoom.html';
        // override the default pinch/zoom behavior of local (or remote) webpages
        // and either allow pinch/zoom (set to true) or not (set to false)
        $.webView.scalesPageToFit = true;
        break;
    case 'Webviewcontrols':
        {
            $.webView.url = 'http://www.google.com';
            // test web controls
            var bb2 = Titanium.UI.createButtonBar({
                labels : ['Back', 'Reload', 'Forward'],
                backgroundColor : '#003'
            });
            var flexSpace = Titanium.UI.createButton({
                systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
            });
            $.frmWin.setToolbar([flexSpace, bb2, flexSpace]);
            $.webView.addEventListener('load', function(e) {
                Ti.API.debug("url = " + $.webView.url);
                Ti.API.debug("event url = " + e.url);
            });
            bb2.addEventListener('click', function(ce) {
                if (ce.index == 0) {
                    $.webView.goBack();
                } else if (ce.index == 1) {
                    $.webView.reload();
                } else {
                    $.webView.goForward();
                }
            });
        }
        break;
    case 'AutoSize':
        $.webView.html = '<html><body style="height:200px;width:100px;border:1px solid #ccc;padding:10px">200 px height, 100 px width.</body></html>';
        $.webView.height = Ti.UI.SIZE;
        $.webView.width = Ti.UI.SIZE;
        break;
    case 'PartialAuto':
        $.webView.html = '<html><body><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><hr/><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></body></html>';
        $.webView.top = 100;
        $.webView.bottom = 0;
        break;
    case 'HTML5Video':
        $.webView.url = '/etc/html5video.html';
        break;
    default:
        console.log('Others');
        $.webView.url = "http://www.google.co.jp";
        break;
    }
})();

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/webviewshow',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
