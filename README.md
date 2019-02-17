# Liri

This node app recognizes command line user input, interacts with one of a chosen list of APIs, and returns to the user the information based on their input terms.

Data from the APIs are retrieved by using the Axios npm. The APIs used in liri-node-app are Bands in Town, OMDB and Spotify.

The user has four commands at their disposal. They're invited to 

#### `node liri.js concert-this _name of artist_`
This command will return to the user information about the band's next concerts. The data points that will be returned are the name of the venue, location of the venue, and date of the event in a MM/DD/YYYY format.

Example:
![Alt text](assets/gifs/concert-this.gif?raw=true "Concert Gif")

#### `node liri.js spotify-this-song _name of song_`
This command will return to the user information from Spotify about the song they searched for. The returned info includes the Artist name, the song name, a preview link of the song from Spotify, the name of the album the song is included in in Spotify's database. If the user doesn't input a song name, the program will return a surprise.

Example:
![Alt text](assets/gifs/spotify-this-song.gif?raw=true "Spofity Gif")



#### `node liri.js movie-this _movie name_`
This command will return to the user information from OMDB about the movie they searched for. The data points returned will be the title of the movie, the year of release, the IMDB rating, the Rotten Tomatoes rating, the country credited with production of the movie, the language spoken in the movie, the plot and a list of the actors involved. The if the user doesn't input a movie name after the command, the program will return a surpise.

Example:
![Alt text](assets/gifs/movie-this.gif?raw=true "Movie Gif")



#### `node liri.js do-what-it-says`
This command will use the fs Node package to run a command that is stored in the random.txt file. The text `spotify-this-song I Want it That Way` will be stored in random.txt as a way to test the app's ability to receive commands from a text file.

Example: 
![Alt text](assets/gifs/do-what-it-says.gif?raw=true "Do What It Says Gif")

# Referenced In
This Repo is currently displayed on my [porfolio](https://zzzbray.github.io/Bootstrap-Portfolio/portfolio.html) and its [repo](https://github.com/zzzbray/Bootstrap-Portfolio).