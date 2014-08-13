var args = arguments[0] || {};
var lv_itemclick = function(e) {
	var item = e.section.getItemAt(e.itemIndex);
	alert(item.properties.title);
};
