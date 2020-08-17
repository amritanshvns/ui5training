sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	var pObject= XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.App"
	});
	pObject.then(function (oView) {
		oView.placeAt("content");
	});

});