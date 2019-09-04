# Liri Node App ![Terminal](https://media2.giphy.com/media/4UzW8S83pWoKs/giphy.gif?cid=790b76116ac2045119066847521d16a0bf57a2f71fea05c0&rid=giphy.gif)

Liri is a node.js application that can search the Spotify, Open Movie Database, and the Bands in Town APIs.

*Installation*
* [How to Install](#liri-set-up)
* [Setting up Spotify](#spotify-set-up)
* [Video recording](#Video-Demo)

*How to Use*
* [Search Open Movie Database](#search-open-movie-database)
* [Search Spotify](#search-spotify)
* [Search Bands in Town](#search-bands-in-town)
* [Liri Help](#liri-help)


---
### Liri Set-Up
 1. First, clone the repository to your computer.
 2. Then, navigate to the folder in terminal/git bash. Type npm install to install all necessary node.js modules. (If node.js is not installed, see this link on how to install: https://nodejs.org/en/download/)
 3. See the next section about [setting up Spotify](#spotify-set-up).

---
### Spotify Set-Up
To set up spotify, you'll need generate *client id* and *client secret* with Spotify. See directions below.
 1. Visit https://developer.spotify.com/dashboard/login
 2. Create an account or login with your existing account.
 3. Once you login, you should see an option to create a new application.
 4. Create a new application, and on the next screen copy the *client id* and *client secret*.
 5. In the liri folder create a file named '.env' and format it like this:  SPOTIFY_ID=Your-ID-Here  SPOTIFY_SECRET=Your-Secret-Here
 6. Save and try 'node liri spotify-this-song bye bye bye'
 
 

---
### Search Open Movie Database
*Command format:*
```
node liri movie-this your movie name
```

*Example:*
```
node liri movie-this UP
```

*Example Response:* 
![Example of an Open Movie Database response.](https://i.imgur.com/mmXfC8J.png)

---
### Search Spotify
*Command format:*
```
node liri spotify-this-song your song's name
```

*Example:*
```
node liri spotify-this-song it's you
```

*Example Response:*
![Example of a Spotify response.](https://i.imgur.com/MQKL5Br.png)

---
### Search Bands in Town
*Command format:*
```
node liri concert-this artist name
```

*Example:*
```
node liri concert-this metallica
```

*Example Response:*
![Example of a Bands in Town response.](https://i.imgur.com/9sPSnrM.png)

---
### Liri Do What I say

*Command format:*
```
node liri do-what-it-says
```
*Example Response:*
![Example of a Bands in Town response.](https://i.imgur.com/PX0zk5j.png)
---


### Demo Video
https://drive.google.com/open?id=1pP81aLK-UPxgaTwqS4Amrf-Ve5XLcnOv

