"use strict";

var Marionette = require("backbone.marionette");
    //Layout = require("views/application");

module.exports = Marionette.Controller.extend({
    initialize: function (options) {
        this.region = options.region;
    },

    showDefault: function () {
        debugger;
        console.log('sss');
        //this.region.show(new Layout());
    }
});