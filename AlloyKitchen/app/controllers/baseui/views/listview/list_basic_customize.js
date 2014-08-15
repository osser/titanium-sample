var args = arguments[0] || {};

(function() {
    $.ls_default.setItems(getDataDefaultTemplate());
    $.ls_settings.setItems(getDataSettingsTemplate());
    $.ls_subtitle.setItems(getDataSubtitleTemplate());
    $.ls_contacts.setItems(getDataContactsTemplate());
})();

function getDataDefaultTemplate(){
    var data = [
    {template:Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT, properties: {title:'RED COLOR TITLE',color:'red'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT, properties: {title:'FONT ITALIC',font:{ fontStyle: 'italic' }}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT, properties: {title:'LOCAL IMAGE',image:'apple_logo.jpg'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT, properties: {title:'REMOTE IMAGE WONT WORK ON IOS',image:'http://placehold.it/27x27'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT, properties: {title:'ALL THREE RED ITALIC FONT AND LOCAL IMAGE',font:{ fontStyle: 'italic' },color:'red',image:'apple_logo.jpg'}},
    ];
    return data;
}

function getDataContactsTemplate(){
    var data = [
    {template:Ti.UI.LIST_ITEM_TEMPLATE_CONTACTS, properties: {title:'NO SUBTITLE'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_CONTACTS, properties: {subtitle:'NO TITLE'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_CONTACTS, properties: {title:'TITLE',subtitle:'RED COLOR TITLE',color:'red'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_CONTACTS, properties: {title:'TITLE',subtitle:'FONT ITALIC',font:{ fontStyle: 'italic' }}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_CONTACTS, properties: {title:'BOTH',subtitle:'RED ITALIC FONT',font:{ fontStyle: 'italic' }, color:'red'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_CONTACTS, properties: {title:'IMAGE',subtitle:'IGNORED PROPERTY'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_CONTACTS, properties: {subtitle:'CAN NOT CUSTOMIZE SUBTITLE'}}
    ];
    return data;
}

function getDataSubtitleTemplate(){
    var data = [
	{template:Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE,properties: {title:'NO SUBTITLE'}},    
	{template:Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE,properties: {subtitle:'NO TITLE'}},    
    {template:Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE, properties: {title:'TITLE',subtitle:'RED COLOR TITLE',color:'red'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE, properties: {title:'TITLE',subtitle:'FONT ITALIC',font:{ fontStyle: 'italic' }}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE, properties: {title:'LOCAL IMAGE',subtitle:'apple logo',image:'apple_logo.jpg'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE, properties: {title:'REMOTE IMAGE',subtitle:'WONT WORK ON IOS',image:'http://placehold.it/27x27'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE, properties: {title:'ALL THREE',subtitle:'RED ITALIC FONT AND LOCAL IMAGE',font:{ fontStyle: 'italic' },color:'red',image:'apple_logo.jpg'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE, properties: {subtitle:'CAN NOT CUSTOMIZE SUBTITLE'}}
    ];
    return data;
}

function getDataSettingsTemplate(){
    var data = [
	{template:Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS,properties: {title:'NO SUBTITLE'}},    
	{template:Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS,properties: {subtitle:'NO TITLE'}},    
    {template:Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS, properties: {title:'TITLE',subtitle:'RED COLOR TITLE',color:'red'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS, properties: {title:'TITLE',subtitle:'FONT ITALIC',font:{ fontStyle: 'italic' }}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS, properties: {title:'LOCAL IMAGE',subtitle:'apple logo',image:'apple_logo.jpg'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS, properties: {title:'REMOTE IMAGE',subtitle:'WONT WORK ON IOS',image:'http://placehold.it/27x27'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS, properties: {title:'ALL THREE',subtitle:'RED ITALIC FONT AND LOCAL IMAGE',font:{ fontStyle: 'italic' },color:'red',image:'apple_logo.jpg'}},
    {template:Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS, properties: {title:'CAN NOT', subtitle:'CUSTOMIZE SUBTITLE'}}
    ];
    return data;
}
