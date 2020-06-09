sap.ui.define([
	"sap/ui/core/util/MockServer"
], function(MockServer) {
	"use strict";

	return {

		init: function() {
			
			var oMockServer = new MockServer({
				rootUri: "/api/"
			});
			
			var sPath = jQuery.sap.getModulePath("ovly.chart.localService");
			
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
			
			oMockServer.start();

		}

	};

});