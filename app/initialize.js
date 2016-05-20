
document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
  var app = require('App');
  var $ = require('jquery');  
  console.log('Tasty Brunch, just trying to use jQuery!', $('body'));
  //var app = new App();
  app.start();
});
