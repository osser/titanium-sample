var args = arguments[0] || {};
var lv_itemclick = function(e) {
	var item = e.section.getItemAt(e.itemIndex);
	console.log(item);
	alert(item.properties.title);
};
