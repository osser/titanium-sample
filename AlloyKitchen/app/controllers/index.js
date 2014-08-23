(function() {
    $.index.open();
    $.baseui.parentTab = $.tabBaseUI;
    $.baseui.parentTabGroup = $.index;
    $.controls.parentTab = $.tabControls;
    $.controls.parentTabGroup = $.index;
    $.phone.parentTab = $.tabPhone;
    $.phone.parentTabGroup = $.index;
    $.platform.parentTab = $.tabPlatform;
    $.platform.parentTabGroup = $.index;
    $.mashups.parentTab = $.tabMashups;
    $.mashups.parentTabGroup = $.index;

    Alloy.Globals.tabGroupImage = $.index.toImage();
})();

