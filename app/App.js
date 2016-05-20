"use strict";
var Marionette = require('backbone.marionette');
var Router = require("./router");
var Controller = require("controllers/main");
//var ItemView = require('./ItemView');
var App = new Marionette.Application({
  regions: {
    app: '#app'
  },
  initialize() {
    debugger;
    new Router({controller: new Controller({region: this.body})});
    this.on('start',function(){
  //    this.getRegion('app').show(new ItemView());
    })
  }
});
module.exports = App;
