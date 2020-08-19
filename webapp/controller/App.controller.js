sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		onInit: function () {

		},
		onShowHello: function () {
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			// read msg from i18n model
			this.getView().getModel("i18n").getResourceBundle().then(function (oBundle) {
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
				// show message
				MessageToast.show(sMsg);
			});

		}
	});
});