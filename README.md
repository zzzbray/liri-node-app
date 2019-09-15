# liri


## Description
This node app works with different APIs to make AJAX calls based on inputs in the command line

Data from the APIs are retrieved by using the Axios npm. The APIs used are Bands in Town, OMDB and Spotify.

## Usage

The app can currently react to and process 4 different commands. First, the user types in the following to have node interact with the app

```node liri.js```

Then, after a space, the user inputs one of the 4 commands described below. All but do-what-it-says require search terms to follow the commands. do-what-it-says will surprise you!

#### `concert-this`
This command will return to the user information about the band's next concerts. The data points that will be returned are the name of the venue, location of the venue, the date of the event in a MM/DD/YYYY format and a link to buy tickets from Bands In Town.

![Alt text](assets/gifs/concert-this.gif?raw=true "Concert Gif")

#### `spotify-this-song`
This command will return to the user information from Spotify about the song they searched for. The returned info includes the Artist name, the song name, a preview link of the song from Spotify, the name of the album the song is included in in Spotify's database. If the user doesn't input a song name, the program will return a surprise.

![Alt text](assets/gifs/spotify-this-song.gif?raw=true "Spofity Gif")



#### `movie-this`
This command will return to the user information from OMDB about the movie they searched for. The data points returned will be the title of the movie, the year of release, the IMDB rating, the Rotten Tomatoes rating, the country credited with production of the movie, the language spoken in the movie, the plot and a list of the actors involved. The if the user doesn't input a movie name after the command, the program will return a surpise.

![Alt text](assets/gifs/movie-this.gif?raw=true "Movie Gif")



#### `do-what-it-says`
This command will use the fs Node package to run a command that is stored in the random.txt file. The text `spotify-this-song I Want it That Way` will be stored in random.txt as a way to test the app's ability to receive commands from a text file.

![Alt text](assets/gifs/do-what-it-says.gif?raw=true "Do What It Says Gif")



### References
This repo is currently displayed on my [porfolio](https://zbray.github.io/bootstrapPortfolio/portfolio.html) and its [repo](https://github.com/zbray/portfolio).

&copy; 2018 zbray
