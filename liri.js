require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var searchValue = process.argv[3];

function spotifTy_This_Song(searchValue) {


};


function movie_This(searchValue) {


};

function concert_This(searchValue) {

}

function do_what_it_says() {

}

switch (command) {

    case "spotify-this-song":
        spotifTy_This_Song(searchValue);
        break;

    case "movie-this":
        movie_This(searchValue);
        break;

    case "concert-this":
        concert_This(searchValue);
        break;

    case "do-what-it-says":
        do_what_it_says();
        break;
}