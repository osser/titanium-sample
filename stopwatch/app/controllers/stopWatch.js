var args = arguments[0] || {};

var timerid = null;
var startTime = new Date();

var btnRestart_click = function(e) {
	clearInterval(timerid);
	$.btnStart.setEnabled(true);
	$.btnContinue.visible = false;
	$.btnRestart.visible = false;
	$.lblTime.setText("00:00:00.000");
};

var btnContinue_click = function(e) {
	if ($.btnContinue.getTitle() == "一時停止") {
		clearInterval(timerid);
		$.btnContinue.setTitle("継続");
	} else {
		timerid = setInterval(doTimer, 3);
		$.btnContinue.setTitle("一時停止");
	}
};

var btnStart_click = function(e) {
	startTime = new Date();
	timerid = setInterval(doTimer, 3);

	$.btnStart.setEnabled(false);
	$.btnContinue.visible = true;
	$.btnContinue.title = "一時停止";
	$.btnRestart.visible = true;
};

var frmOpen = function(e) {
	$.lblInfo.setText(Alloy.Globals.platformWidth + ", " + Alloy.Globals.platformHeight);
};

function doTimer() {
	var now = new Date();
	var diff = now.getTime() - startTime.getTime();

	var UNIT_HOUR = 60 * 60 * 1000;
	var UNIT_MINUTE = 60 * 1000;
	var UNIT_SEC = 1000;
	var hour = Math.floor(diff / UNIT_HOUR);
	var minute = Math.floor((diff - hour * UNIT_HOUR) / UNIT_MINUTE);
	var sec = Math.floor((diff - hour * UNIT_HOUR - minute * UNIT_MINUTE) / UNIT_SEC);
	var msec = Math.floor(diff % UNIT_SEC);
	$.lblTime.setText(("0" + hour).slice(-2) + ":" + ("0" + minute).slice(-2) + ":" + ("0" + sec).slice(-2) + "." + ("00" + msec).slice(-3));
}
