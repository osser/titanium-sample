function doClick(e) {
	alert(e.source.text);
}

$.tabGroup.open();

var lvItemClick = function(e) {
	console.log(e.sectionIndex, e.itemIndex);
	alert(e.sectionIndex + ", " + e.itemIndex);
};
