# M4-Benchmark
React Spotify
Create a new create-react-app application and refactor your old multi-page Spotify Project in ReactJS.

 

FEATURES:

/ Home Page

/ Artist Page

/ Album Page

 

EXTRA FEATURES:

/ When clicking on a song, display the title, the artist and the album picture in the bottom left area

/ Show comments using the usual API (use album id!)

 

For the Home page, use
https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever
to get some albums.

For the Album Page, use the
/albums/:id
https://striveschool-api.herokuapp.com/api/deezer/album/{id} API.
You can get the album ID from the search API es.: json.data[0].album.id 
      
For the Artist page, use the
/artist/:id
https://striveschool-api.herokuapp.com/api/deezer/artist/{id} API
You can get the artist ID from the search API es.: json.data[0].artist.id
 

Hints
Use react-router-dom to implement navigation (Router, Route, Link...)
Create a component for the "Song" that you can reuse everywhere in the App
You can easily rework your HTML code for the navbar and the media player and create react components out of it
Make navbar and footer (media player) available in every page by not routing them
