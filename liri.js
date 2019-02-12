require("dotenv").config();
//Required vars
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");

//User vars
var command = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

var spotify = new spotify(keys.spotify);

// concert-this
// spotify-this-song 
// movie-this
// do-what-it-says 

//Switch case that runs CLI app

switch(command){
  case "concert-this":
  case "spotify-this-song":
  case "movie-this":
  case "do-what-it-says":
  default:
  console.log("Please choose from concert-this, spotify-this-song, movie-this or do-what-it-says");
}