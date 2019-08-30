require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var searchValue = process.argv[3];

function Spotify_This_Song (searchValue){

    if(searchValue===undefined || null){
    searchValue="The sign";
    }
        spotify.search({ type: 'track', query: searchValue }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            
            else{
                for (let i = 0; i < data.tracks.items.length && i<5; i++) {
                
                    }
            console.log("-------------------------------------------------------------------------------------------")
            console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
            console.log("The song's name: " + data.tracks.items[0].name)
            console.log("A preview link of the song from Spotify: " + data.tracks.items[0].href)
            console.log("The album that the song is from: " + data.tracks.items[0].album.name)
            console.log("-------------------------------------------------------------------------------------------")
            }
        
        });
        };


    function movie_This(searchValue) {


    };

    function concert_This(searchValue) {

    }

    function do_what_it_says() {

    }

    switch (command) {

        case "spotify-this-song":
            Spotify_This_Song(searchValue);
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