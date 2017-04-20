import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';

const Network = (props) => (null);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.api = new SpotifyWebApi({});
    this.state = {
      nodes: [],
      edges: []
    }
  }

  async get_albums_for_artist(name) {
    const data = await api.searchArtists(name);
    // for(let { id, name } of data.body.artists.items) {
    //   this.visualizer.addNode(id, name); 
    // }
    const nodes = data.body.artists.items.map(({id, name}) => ({id, name}));
    this.setState( { nodes });
  }

  findArtist = (e) => {
    this.getAlbumsOfArtist()
  }

  render() {
    return (
      <div className="container">
        <h1>Search for an Artist</h1>
        <p>Type an artist name and click on "Search". Then, click on any album from the results to play 30 seconds of its first track.</p>
        {/*<form id="search-form">
          <input type="text" id="query" defaultValue="" className="form-control" placeholder="Type an Artist Name"/>
          <button className="btn btn-primary" onClick={this.findArtist}>Search</button>
        </form>*/}
        <Network data={this.nodes} />
      </div>
    );
  }
}