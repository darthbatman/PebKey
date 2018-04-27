var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var fs = require("fs");

app.get("/chrome", function(req, res) {
  res.send("<h1>Hello Vedant</h1>");
  console.log("Chrome accessed");
var exec = require('child_process').exec;
var child = exec('chrome.vbs', function( error, stdout, stderr)
   {
       if ( error != null ) {
            console.log(stderr);
       }
   });
});

app.get("/twitter", function(req, res) {
  res.send("<h1>Hello Vedant</h1>");
  console.log("Twitter accessed");
var exec = require('child_process').exec;
var child = exec('twLogin.vbs', function( error, stdout, stderr)
   {
       if ( error != null ) {
            console.log(stderr);
       }
   });
});

app.get("/facebook", function(req, res) {
  res.send("<h1>Hello Vedant</h1>");
  console.log("Facebook accessed");
var exec = require('child_process').exec;
var child = exec('fbLogin.vbs', function( error, stdout, stderr)
   {
       if ( error != null ) {
            console.log(stderr);
       }
   });
});

app.get("/close", function(req, res) {
  res.send("<h1>Hello Vedant</h1>");
  console.log("Close");
var exec = require('child_process').exec;
var child = exec('close.vbs', function( error, stdout, stderr)
   {
       if ( error != null ) {
            console.log(stderr);
       }
   });
});

app.get("/up", function(req, res) {
  res.send("<h1>Hello Vedant</h1>");
  console.log("Up");
var exec = require('child_process').exec;
var child = exec('up.vbs', function( error, stdout, stderr)
   {
       if ( error != null ) {
            console.log(stderr);
       }
   });
});

app.get("/down", function(req, res) {
  res.send("<h1>Hello Vedant</h1>");
  console.log("Down");
var exec = require('child_process').exec;
var child = exec('down.vbs', function( error, stdout, stderr)
   {
       if ( error != null ) {
            console.log(stderr);
       }
   });
});


app.get("/success", function(req, res) {
  res.send("<h1>Hello Vedant</h1>");
  console.log("Success");
var exec = require('child_process').exec;
var child = exec('success.vbs', function( error, stdout, stderr)
   {
       if ( error != null ) {
            console.log(stderr);
       }
   });
});


http.listen(8080, function() {
  console.log("Listening on *:8080");
});
