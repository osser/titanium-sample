var args = arguments[0] || {};

(function() {
    $.ls_default.setItems(getDataDefaultTemplate());

    if (OS_IOS) {
        $.ls_settings.setItems(getDataSettingsTemplate());
        $.ls_subtitle.setItems(getDataSubtitleTemplate());
        $.ls_contacts.setItems(getDataContactsTemplate());
    }
})();

function getDataDefaultTemplate() {
    var data = [];
    var titleStr = '';
    var subtitleStr = '';

    for (var i = 0; i <= 10; i++) {
        var mod = i % 4;
        titleStr = 'Clip...';
        var acType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
        switch(mod) {
        case 1:
            subtitleStr = 'I have checkmark accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
            break;
        case 2:
            subtitleStr = 'I have detail accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_DETAIL;
            break;
        case 3:
            subtitleStr = 'I have disclosure accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE;
            break;
        default:
            subtitleStr = 'I have no accessory ';
            break;
        }
        var item = {
            template : Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT,
            properties : {
                title : i + ' ' + subtitleStr + ' ' + titleStr,
                accessoryType : acType,
                itemId : 'Item ' + i + ' ' + acType
            }
        };
        data.push(item);
    }
    return data;
}

function getDataSettingsTemplate() {
    var data = [];
    var titleStr = '';
    var subtitleStr = '';
    for ( i = 0; i < 10; i++) {
        var mod = i % 4;
        titleStr = 'Push subtitle .. ';
        var acType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
        if (mod == 1) {
            subtitleStr = 'I have checkmark accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
        } else if (mod == 2) {
            subtitleStr = 'I have detail accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_DETAIL;
        } else if (mod == 3) {
            subtitleStr = 'I have disclosure accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE;
        } else {
            subtitleStr = 'I have no accessory ';
        }
        var item = {
            template : Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS,
            properties : {
                title : i + ' ' + titleStr,
                subtitle : subtitleStr,
                accessoryType : acType,
                itemId : 'Item ' + i + ' ' + acType
            }
        };
        data.push(item);
    }
    return data;
}

function getDataSubtitleTemplate() {
    var data = [];
    var titleStr = '';
    var subtitleStr = '';
    for ( i = 0; i < 10; i++) {
        var mod = i % 4;
        titleStr = 'Look at me grow .. ';
        var acType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
        if (mod == 1) {
            subtitleStr = 'I have checkmark accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
        } else if (mod == 2) {
            subtitleStr = 'I have detail accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_DETAIL;
        } else if (mod == 3) {
            subtitleStr = 'I have disclosure accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE;
        } else {
            subtitleStr = 'I have no accessory ';
        }
        var item = {
            template : Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE,
            properties : {
                title : i + ' ' + titleStr,
                subtitle : subtitleStr + ' ' + titleStr,
                accessoryType : acType,
                itemId : 'Item ' + i + ' ' + acType
            }
        };
        data.push(item);
    }
    return data;
}

function getDataContactsTemplate() {
    var data = [];
    var titleStr = '';
    var subtitleStr = '';
    for ( i = 0; i < 10; i++) {
        var mod = i % 4;
        titleStr = 'Clip .. ';
        var acType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
        if (mod == 1) {
            subtitleStr = 'I have checkmark accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
        } else if (mod == 2) {
            subtitleStr = 'I have detail accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_DETAIL;
        } else if (mod == 3) {
            subtitleStr = 'I have disclosure accessory ';
            acType = Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE;
        } else {
            subtitleStr = 'I have no accessory ';
        }
        var item = {
            template : Ti.UI.LIST_ITEM_TEMPLATE_CONTACTS,
            properties : {
                title : i + ' ' + titleStr,
                subtitle : subtitleStr,
                accessoryType : acType,
                itemId : 'Item ' + i + ' ' + acType
            }
        };
        data.push(item);
    }
    return data;
}