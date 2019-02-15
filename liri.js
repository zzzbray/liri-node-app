require("dotenv").config();
//Required vars
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

//User vars
var command = process.argv[2];
var query = process.argv.slice(3).join(" ");



//------------
var doWhat = function () {
  console.log("\n--------------\n\n---spotify command---");
  spotify.search({
    type: "track",
    query: query
  }, function (err, data) {
    if (err) {
      return console.log("Error:" + err);
    }
    //revert/default needs fixing
    if (songQuery === '') {
      console.log("searching for The Sign")
      songQuery = "The Sign";
    }
    console.log("---performing spotify search---");
    console.log("\n--------------\n");
    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
    console.log("Song: " + data.tracks.items[0].name);
    console.log("Appears on: " + data.tracks.items[0].album.name);
    console.log("Listen on Spotify: " + data.tracks.items[0].preview_url);
    console.log("\n--------------\n");
  });
}
//Switch case statment that runs CLI app
switch (command) {
  //Bands in Town Command
  case "concert-this":
    console.log("\n--------------\n\n---concert command---")
    var bandQuery = process.argv.slice(3).join(" ");
    var concertUrl = "https://rest.bandsintown.com/artists/" + bandQuery + "/events?app_id=codingbootcamp";
    axios.get(concertUrl).then(function (response, err) {
      console.log("---performing concert command---");
      console.log("\n--------------\n");
      console.log("Venue Name: " + response.data[0].venue.name);
      console.log("City: " + response.data[0].venue.city);
      console.log("Time: " + response.data[0].datetime); // needs to be updated with moment.js
      console.log("Buy tickets here: " + response.data[0].offers.url);
      console.log("\n--------------\n");
      if (err) {
        console.log("Error: " + err)
      }
    })
    break;


    //Spotify Command
  case "spotify-this-song":
    // console.log("\n--------------\n\n---spotify command---");
    // spotify.search({
    //   type: "track",
    //   query: query
    // }, function (err, data) {
    //   if (err) {
    //     return console.log("Error:" + err);
    //   }
    //   //revert/default needs fixing
    //   if (songQuery === '') {
    //     console.log("searching for The Sign")
    //     songQuery = "The Sign";
    //   }
    //   console.log("---performing spotify search---");
    //   console.log("\n--------------\n");
    //   console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
    //   console.log("Song: " + data.tracks.items[0].name);
    //   console.log("Appears on: " + data.tracks.items[0].album.name);
    //   console.log("Listen on Spotify: " + data.tracks.items[0].preview_url);
    //   console.log("\n--------------\n");
    // });
    break;


    //OMDB Command
  case "movie-this":
    console.log("\n--------------\n\n---films command---");
    //api search
    var movieQuery = process.argv.slice(3);
    if (!process.argv[3]) {
      movieQuery = "Mr. Nobody";
    }
    var movieUrl = "http://www.omdbapi.com/?t=" + movieQuery + "&apikey=trilogy";
    axios.get(movieUrl).then(function (response, err) {
      console.log("---performing movies search---");
      console.log("\n--------------\n");
      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings[0].Value);
      console.log("Country: " + response.data.country);
      console.log("Languages: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Cast: " + response.data.Actors);
      console.log("\n--------------\n");
      if (err) {
        console.log("Error: " + err)
      }
    })

    //return
    break;

    //Do What It Says Command
  case "do-what-it-says":
    console.log("---doing it command---");
    fs.readFile("random.txt", 'utf8', function (error, data) {
      if (error) {
        console.log("Error: " + error);
        return;
      };
      var randomString = data.split(',');
      var randomCommand = randomString[0];
      var randomQuery = randomString[1];
      console.log(randomString);
      console.log("\n--------------\n\n---do what it says command---");
      spotify.search({
        type: "track",
        query: randomQuery,
      }, function (err, data) {
        if (err) {
          return console.log("Error:" + err);
        }
        console.log("\n--------------\n");
        console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Appears on: " + data.tracks.items[0].album.name);
        console.log("Listen on Spotify: " + data.tracks.items[0].preview_url);
        console.log("\n--------------\n");
      });
    });
    console.log("---nearly there!---");
    return;
    break;

  default:
    console.log("Please choose from concert-this, spotify-this-song, movie-this or do-what-it-says");
}