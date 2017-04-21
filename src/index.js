import "bootstrap/dist/css/bootstrap.css";
import $ from 'jquery';
// import Handlebars from 'handlebars/dist/handlebars.js';

import "../styles/style.css";
import Visualizer from './visualizer.js';
import SpotifyAPI from './spotify_web_api.js'

// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import App from './app.js';
// render(<App />, document.getElementById('react-root'));

const spotify_API = new SpotifyAPI();

$(() => {
  const templateSource = $('#results-template').text();
  const network = document.getElementById('network');
  const visualizer = new Visualizer(network);

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
