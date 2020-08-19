sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/Filter"

], function (Controller, JSONModel, FilterOperator, Filter) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		onInit: function () {
			var that = this;
			$.ajax({
				url: "https://reqres.in/api/users",
				method: "GET",
				success: function (data) {
					console.log(data);
					var oModel = new JSONModel({});
					oModel.setData(data);
					that.getView().setModel(oModel, "userModel");

				},
				error: function (error) {
					console.log(error);
				}
			});
		},

		changeSorting: function () {
			if (this.flag) {
				this.flag = false;
				var oSorting = new sap.ui.model.Sorter({
					path: "first_name",
					descending: false

				});
				this.getView().byId("employeesList").getBinding("items").sort(oSorting);
			} else {
				this.flag = true;
				oSorting = new sap.ui.model.Sorter({
					path: "first_name",
					descending: true
				});

				this.getView().byId("employeesList").getBinding("items").sort(oSorting);
			}
		},

		changeGrouping: function () {
			if (this.flag) {
				this.flag = false;
				var oGrouping = new sap.ui.model.Sorter({
					path: "team",
					group: false

				});
				this.getView().byId("employeesList").getBinding("items").sort(oGrouping);
			} else {
				this.flag = true;
				oGrouping = new sap.ui.model.Sorter({
					path: "team",
					group: true

				});

				this.getView().byId("employeesList").getBinding("items").sort(oGrouping);
			}
		},

		onSearch: function (oEvent) {
			var sSearch = oEvent.getParameters().newValue;
			console.log(sSearch);
			var aFilter = [];
			aFilter.push(
				new Filter("first_name", FilterOperator.Contains, sSearch)
			);
			aFilter.push(
				new Filter("last_name", FilterOperator.Contains, sSearch)
			);

			var oFilter = new Filter({
				filters: aFilter,
				and: false
			})

			this.getView().byId("employeesList").getBinding("items").filter(oFilter);
		}
	});
});