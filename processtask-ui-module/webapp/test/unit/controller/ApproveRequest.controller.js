/*global QUnit*/

sap.ui.define([
	"comsumo/processtask-ui-module/controller/ApproveRequest.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ApproveRequest Controller");

	QUnit.test("I should test the ApproveRequest controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
