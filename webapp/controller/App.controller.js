sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (BaseController) {
	"use strict";
	return BaseController.extend("sap.ui.demo.walkthrough.controller.App", {
		onPressOfButton: function (oEvent) {
			var x = oEvent.getSource();
			if (x.getId().endsWith("button1")) {
				alert("Accepted");
			} else if (x.getId().endsWith("button2")) {
				alert("Rejected");
			}

		}
	});
});