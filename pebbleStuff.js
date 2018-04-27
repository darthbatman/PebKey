
/**
* Welcome to Pebble.js!
*
* This is where you write your app.
*/

var UI = require('ui');
var Accel = require('ui/accel');

var ajax= require('ajax');

Accel.config(100, 25, false);

var main = new UI.Card({
 title: 'KeyPeb!',
  subtitle:'With a flick of the wrist'
});
Accel.init();
main.show();



Accel.on('tap', function(e) {
if(1===0){
}
 else if (e.axis == 'x' && e.direction == 1) {
   console.log('ITS FACEBOOKING!');
main.title('Facebook');

    ajax({
      url: 'http://darthbatman.tk/facebook',
   method: 'get'
 });
 }
else if (e.axis == 'x' && e.direction == -1) {
 main.title('Twitter');
 console.log('ITS TWITTERING');
    ajax({
     
   url: 'http://darthbatman.tk/twitter',
   method: 'get'
 });
 }
 else if (e.axis == 'y' && e.direction == -1) {
   
 console.log('ITS DOINT THE ALT F4 THING!');
   main.title('Ending on a good note');
   main.subtitle('WITH SUCCES KID!');
    ajax({
     
   url: 'http://darthbatman.tk/success',
   method: 'get'
 });
 }
 
 else if (e.axis == 'z' && e.direction == -1) {
 console.log('ITS FUCKING OPENING THE BROWSER');
   main.title('Opening Browser');
   
    ajax({
     
    url: 'http://darthbatman.tk/chrome',
   method: 'get'
 });
 }
   else if (e.axis == 'z' && e.direction == 1) {
 console.log('ITS FUCKING CLOSING THE BROWSER');
main.title('Closing Browser');
    ajax({
     
    url: 'http://darthbatman.tk/close',
   method: 'get'
 });
 }
 
 


});

main.on('click', 'select', function(e) {
   console.log('Button Press for BROWSER CLOSE');
  main.title('Closing Browser');
ajax({
     
    url: 'http://darthbatman.tk/close',
   method: 'get'
 });
});

main.on('click', 'up', function(e) {
   console.log('Button Press for Scrolling Down');
  main.title('Scroll Down');
ajax({
     
    url: 'http://darthbatman.tk/up',
   method: 'get'
 });
});

main.on('click', 'down', function(e) {
   console.log('Button Press for Scroling Down');
  main.title('Scroll Down');
ajax({
     
    url: 'http://darthbatman.tk/down',
   method: 'get'
 });
});