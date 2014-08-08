// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Ti.UI.setBackgroundColor("silver");

Alloy.Globals.top = 0;
Alloy.Globals.tableTop = '50';

try {
	console.log("Titanium.Platform.version:", Titanium.Platform.version);
	// check for iOS7
	if (OS_IOS && parseInt(Titanium.Platform.version.split(".")[0], 10) >= 7) {
		Alloy.Globals.top = '20';
		Alloy.Globals.tableTop = '70';
	}
	console.log("Alloy.Globals.top:", Alloy.Globals.top);
} catch(e) {
	// catch and ignore
}
