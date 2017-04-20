var SpotifyWebApi = require('spotify-web-api-node');
// var Visu = require('./vis_nodes');
import Visualizer from './vis_nodes.js';

// credentials are optional
var spotifyApi = new SpotifyWebApi({
//   clientId : '',
//   clientSecret : '',
//   redirectUri : ''
});

$(document).ready(function() {
  // find template and compile it
  var templateSource = document.getElementById('results-template').innerHTML,
      template = Handlebars.compile(templateSource),
      resultsPlaceholder = document.getElementById('results'),
      playingCssClass = 'playing',
      audioObject = null;

  const network = document.getElementById('network');
  const visualizer = window.visualizer = new Visualizer(network);
  
  // function getAlbumsOfArtist(artist_name){
  //   // Search artists
  //   spotifyApi.searchArtists(artist_name)
  //     .then(function(data) {
  //       console.log(`Search artists named ${name}`, data.body.artists.items);
  //       // Used in vis_nodes to create artist nodes
  //       for (let item of data.body.artists.items){
  //         // vis_nodes.createArtistNodes(item.id, item.name);
  //         visualizer.addNode(item.id, item.name);
  //       }

  //       resultsPlaceholder.innerHTML = template(data.body);
  //     }, function(err) {
  //       console.error(err);
  //     });
  // }

  // async function getAlbumsOfArtist(artist_name) {
  //   const 
  // }

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
