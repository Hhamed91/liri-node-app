require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var axios= require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var searchValue = process.argv[3];