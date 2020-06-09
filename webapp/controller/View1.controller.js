sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.chart.controller.View1", {
		onInit: function () {
			
			var oChartSettings = {
				title: {
					text: "Vendas por País",
					style: {
						color: "green",
						fontSize: "20px"
					}
				},
				legendGroup:{
					layout:{
						position: "bottom",
						aligment: "center"
					}
				}
				
			};
			
			var oChartModel = new sap.ui.model.json.JSONModel(oChartSettings);
			this.getView().setModel(oChartModel, "chart");

		}
	});
});