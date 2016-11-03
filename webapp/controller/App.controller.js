sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
   //these are the required modules to inject
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.demo.wt.controller.App", {
      onShowHello : function () {
         // show a native JavaScript alert
         alert("this is the button controller in action!");
         MessageToast.show("This is the injected Toast module");
      }
   });
});