var args = arguments[0] || {};
var version = require('version');

var performAddressBookFunction = function(e) {
    $.frmWin.remove($.lblInfo);
    $.lblDesc.setText('This is a list View that uses a custom template that holds an imageView and a label.\n' + 'The data is loaded from the phones contacts.\n' + 'Expected performance is a smooth scroll experience.\n' + 'On scrolling back and forth in the list view, the right image must be loaded.(since we are reusing views)\n\n');
};

(function() {
    console.log('isIPhone3_2_Plus()', version.isIPhone3_2_Plus());
    console.log('isiOS4Plus()', version.isiOS4Plus());
    console.log('isiOS6Plus()', version.isiOS6Plus());
    console.log('isiOS7Plus()', version.isiOS7Plus());

    var needsAuth = false;
    var supportsAuthAPI = (Ti.version >= '2.1.3');
    console.log('Ti.version', Ti.version);

    if (OS_IOS) {
        needsAuth = version.isiOS6Plus();
    }

    var requestPermission = function(e) {
        var privs = Ti.Contacts.contactsAuthorization;
        if (privs === Ti.Contacts.AUTHORIZATION_AUTHORIZED) {
            performAddressBookFunction();
        } else {
            if (privs === Ti.Contacts.AUTHORIZATION_RESTRICTED) {
                $.lblInfo.text = 'Contact authorization restricted. User can not grant permission. ';
            } else if (privs === Ti.Contacts.AUTHORIZATION_DENIED) {
                $.lblInfo.text = 'Contact authorization denied. User has disallowed contacts use.';
            } else if (privs === Ti.Contacts.AUTHORIZATION_UNKNOWN) {
                $.lblInfo.text = 'Contact authorization unknown. Request permission from user.';
            } else {
                $.lblInfo.text = 'Got unknown value for Ti.Contacts.contactsAuthorization';
            }
        }
    };

    if (needsAuth) {
        if (supportsAuthAPI) {
            requestPermission();
        } else {
            $.lblInfo.text = 'The Contacts API requires user permission to run successfully. This version of the Titanium SDK does not support contact authorization. Please update to SDK 2.1.3 or later.';
        }
    } else {
        performAddressBookFunction();
    }
})();

var btnShowMe_click = function(e) {
    $.lblDesc.setText('Loading Contacts...');
    var persons = Ti.Contacts.getAllPeople();
    if (persons.length > 0) {
        $.frmWin.remove($.btnShowMe);
        setupWin(persons);
        $.frmWin.remove($.lblDesc);
    } else {
        $.lblDesc.setText('No Contacts on device.');
        $.frmWin.remove($.btnShowMe);
    }
};

function setupWin(persons) {
    $.section0.setItems(genData(persons));
    if (OS_IOS) {
        $.listView.style = Ti.UI.iPhone.ListViewStyle.GROUPED;
    }
    $.listView.setVisible(true);
}

function isValidVar(check) {
    if (check !== undefined && check !== null) {
        return true;
    }
    return false;
}

function genData(persons) {
    var data = [];
    for ( i = 0; i < persons.length; i++) {
        var person = persons[i];
        var phoneObj = person.phone;
        var phonestr = ' No Home, Work or Mobile number';
        if (isValidVar(phoneObj['home'])) {
            phoneStr = 'Home: ' + phoneObj['home'];
        } else if (isValidVar(phoneObj['work'])) {
            phoneStr = 'Work: ' + phoneObj['work'];
        } else if (isValidVar(phoneObj['mobile'])) {
            phoneStr = 'Mobile: ' + phoneObj['mobile'];
        }
        var nameStr = '';

        if (isValidVar(person.fullName)) {
            nameStr = person.fullName;
        } else {
            if (isValidVar(person.perfix)) {
                nameStr += person.perfix + ' ';
            }
            if (isValidVar(person.firstName)) {
                nameStr += person.firstName + ' ';
            }
            if (isValidVar(person.middleName)) {
                nameStr += person.middleName + ' ';
            }
            if (isValidVar(person.lastName)) {
                nameStr += person.lastName + ' ';
            }
            if (isValidVar(person.suffix)) {
                nameStr += person.suffix;
            }
        }
        var imageObj = 'http://placehold.it/50x50';
        if (isValidVar(person.image)) {
            imageObj = person.image;
        }
        data.push({
            avatar : {
                image : imageObj
            },
            info : {
                text : nameStr + '\n' + phonestr
            }
        });
    }
    return data;
}

var showSource = function(e) {
    //alert('showSource');
    var webshow = Alloy.createController('webshow', {
        sourceUrl : 'baseui/views/listview/list_performance_contacts',
    }).getView();

    if (OS_IOS) {
        args.parentTab.open(webshow);
    }
    if (OS_ANDROID) {
        webshow.open();
    }
};
