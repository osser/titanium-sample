var args = arguments[0] || {};

var btnRestart_click = function(e) {
	$.btnStart.setEnabled(true);
	$.btnContinue.visible = false;
	$.btnRestart.visible = false;
};

var btnContinue_click = function(e) {
	if ($.btnContinue.getTitle() == "一時停止") {
		$.btnContinue.setTitle("継続");
	} else {
		$.btnContinue.setTitle("一時停止");
	}
};

var btnStart_click = function(e) {
	$.btnStart.setEnabled(false);
	$.btnContinue.visible = true;
	$.btnContinue.title = "一時停止";
	$.btnRestart.visible = true;
};

var frmOpen = function(e) {
	$.lblInfo.setText(Alloy.Globals.platformWidth + ", " + Alloy.Globals.platformHeight);
};
