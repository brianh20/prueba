sap.ui.define([
   "sap/ui/core/mvc/Controller",
   //these are the required modules to inject
], function (Controller) {
   "use strict";
   return Controller.extend("sap.ui.demo.wt.controller.App", {
      onOpenDialog : function () {
         this.getOwnerComponent().helloDialog.open(this.getView());
      }
		
   });
});