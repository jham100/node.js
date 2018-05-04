
require("dotenv").config();
var request = require("request");
var requestp = require("request-promise");
var Spotify = require('node-spotify-api');

var keys = require('./keys.js');


var spotify = new Spotify({
    id:keys.spotify.id,
    secret:keys.spotify.secret,
  });
   
  spotify.search({ type: 'track', query: process.argv[2]}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  JSON.stringify(data); 
  console.log(data.tracks.items[0]);
  });
  
