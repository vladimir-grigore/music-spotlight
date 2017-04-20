var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : 'e573885cca0743bb886be227a00a59b1',
  clientSecret : '7b2c23f2fbea45f7bec90585debcb715',
  redirectUri : 'http://localhost:8888/callback'
});

$(document).ready(function(){
  // find template and compile it
  var templateSource = document.getElementById('results-template').innerHTML,
      template = Handlebars.compile(templateSource),
      resultsPlaceholder = document.getElementById('results'),
      playingCssClass = 'playing',
      audioObject = null;

  function getAlbumsOfArtist(artist_name){
    // Search artists
    spotifyApi.searchArtists(artist_name)
      .then(function(data) {
        console.log(`Search artists named ${name}`, data.body.artists.items);
        resultsPlaceholder.innerHTML = template(data.body);
      }, function(err) {
        console.error(err);
      });
  }

  // spotifyApi.getArtistAlbums('2ye2Wgw4gimLv2eAKyk1NB', {limit: 5, market: 'US'})
  //   .then(function(data) {
  //     // console.log("--", data.body);
  //     return data.body.items.map(function(a) { return a.id; });
  //   })
  //   .then(function(albums) {
  //     return spotifyApi.getAlbums(albums);
  //   }).then(function(data) {
  //     console.log("==", data.body);
  // });

  document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    getAlbumsOfArtist(document.getElementById('query').value);
  }, false);
});