import SpotifyWebApi from 'spotify-web-api-node';

export default class SpotifyAPI {
  constructor(){
    this.api = new SpotifyWebApi({});
  }

  search_artists = async function(name) {
    const data = await this.api.searchArtists(name);
    console.log("DATA.BODY.ARTISTS.ITEMS", data.body.artists.items);
    for(let { id, name } of data.body.artists.items) {
      // need to change to addArtistNode
      visualizer.addNode(id, name);
    }
    // return data;
  }

  get_albums_for_artist = async function(artistID) {
    const data = await this.api.getArtistAlbums(artistID, {limit: 10, market: 'US'})
    const ids = data.body.items.map(x => x.id);
    // need to add to addAlbumNode
    const albums = await this.api.getAlbums(ids);
    console.log(albums.body);
  }
}
