var args = arguments[0] || {};
var btnAddRemoveTab_click = function(e) {
    //alert('btnAddRemoveTab_click');
    if (args.tabGroup.tabs.length < 10) {
        //Add
        var win = Ti.UI.createWindow({
            title : 'New Tab Window ' + args.tabGroup.tabs.length,
            barColor : "fuchsia",
            backgroundColor : 'silver'
        });
        var newTab = Ti.UI.createTab({
            title : 'New Tab ' + args.tabGroup.tabs.length,
            icon : 'common/allsize/cmd16.png',
            window : win
        });
        args.tabGroup.addTab(newTab);
    } else {
        //Remove
        if (OS_IOS) {
            var tab = args.tabGroup.tabs[args.tabGroup.tabs.length - 1];
            args.tabGroup.removeTab(tab);
        }
        if (OS_ANDROID) {
            alert('Andoidは削除できません。');
        }
    }
};

var transformed = false;
var btnAnimateTabGroup_click = function(e) {
    if (OS_ANDROID) {
        alert('Androidはこの機能がありません。');
        return;
    }
    if (transformed === false) {
        var transform = Ti.UI.create2DMatrix();
        transform = transform.scale(0.6);
        transform = transform.rotate(45);
        args.tabGroup.animate({
            transform : transform,
            duration : 1000
        });
        transformed = true;
    } else {
        var transform = Ti.UI.create2DMatrix();
        args.tabGroup.animate({
            transform : transform,
            duration : 1000
        });
        transformed = false;
    }
};
var btnCloseAnimateTabGroup_click = function(e) {
    if (OS_ANDROID) {
        alert('Androidはこの機能がありません。');
        return;
    }
    args.tabGroup.animate({
        opacity : 0,
        duration : 1000
    }, function() {
        args.tabGroup.animate({
            opacity : 1,
            duration : 1000
        });
    });
};
var btnSetActiveTabIndex_click = function(e) {
    if (OS_ANDROID) {
        alert('Androidはこの機能がありません。');
        return;
    }
    //Controls
    args.tabGroup.setActiveTab(1);
};
var btnSetActiveTabObject_click = function(e) {
    if (OS_ANDROID) {
        alert('Androidはこの機能がありません。');
        return;
    }
    //Phone
    args.tabGroup.setActiveTab(args.tabGroup.tabs[2]);
};
var btnSwitchCustomization_click = function(e) {
    alert('意味不明プロパティです。');
    var tabGroup = args.tabGroup;
    if (tabGroup.allowUserCustomization) {
        tabGroup.allowUserCustomization = false;
        $.btnSwitchCustomization.setTitle('Switch on');
    } else {
        tabGroup.allowUserCustomization = true;
        $.btnSwitchCustomization.setTitle('Switch off');
    }
};

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/tabgroups',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
