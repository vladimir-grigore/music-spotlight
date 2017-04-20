import "bootstrap/dist/css/bootstrap.css";
import $ from 'jquery';
// import Handlebars from 'handlebars/dist/handlebars.js';

import "../style.css";
import Visualizer from './visualizer.js';
import SpotifyAPI from './spotify_web_api.js'

// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import App from './app.js';
// render(<App />, document.getElementById('react-root'));

const spotify_API = new SpotifyAPI();

$(() => {
  const templateSource = $('#results-template').text();
  // const template = Handlebars.compile(templateSource);
  // const resultsPlaceholder = $('#results');
  const network = document.getElementById('network');
  const visualizer = new Visualizer(network);
  /*
  async function search_artists(name) {
    const data = await api.searchArtists(name);
    console.log("DATA.BODY.ARTISTS.ITEMS", data.body.artists.items);
    for(let { id, name } of data.body.artists.items) {
      visualizer.addNode(id, name);
    }
    // return data;
  }

  async function get_albums_for_artist(artistID) {
    const data = await api.getArtistAlbums('2ye2Wgw4gimLv2eAKyk1NB', {limit: 5, market: 'US'})
    const ids = data.body.items.map(x => x.id);
    const albums = await api.getAlbums(ids);
    console.log(albums.body);
  }
*/

  // async function getAlbumsAndSongsForArtist(id) {
  //   const artist = await api.getArtist(id);
  //   for(let album of artist.albums) {
  //     const songs = await api.getSongs(album.id);
  //   }
  //   const songs = await Promise.all(artist.albums.map(album => api.getSongsForAlbum(album.id)));
  // }

  const $query = $('#query');

  const $searchFrom = $('#search-form').on('submit', async function(e) {
    e.preventDefault();
    visualizer.clear();
    const artists = await spotify_API.search_artists($query.val());
    for( {id, name } of artists) {
      visualizer.addArtistNode(id, name);
    }
  });
});
