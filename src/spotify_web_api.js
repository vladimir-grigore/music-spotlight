import SpotifyWebApi from 'spotify-web-api-node';

const client_id = process.env.CLIENT_ID; // Your client id
const client_secret = process.env.CLIENT_SECRET; // Your secret
const redirect_uri = process.env.REDIRECT_URI; // Your redirect uri

export default class SpotifyAPI {
  constructor(){
    this.api = new SpotifyWebApi({});
  }

  search_artists = async function(name) {
    const data = await this.api.searchArtists(name);
    return data.body.artists.items.map(item => ({ id: item.id, name: item.name }));
  }

  get_albums_for_artist = async function(artistID) {
    const data = await this.api.getArtistAlbums(artistID, {limit: 20, market: 'US'})
    const ids = data.body.items.map(x => x.id);
    const result = await this.api.getAlbums(ids);
    return result.body.albums;
  }

  get_tracks_for_album = async function(albumID) {
    const data = await this.api.getAlbumTracks(albumID);
    return data.body.items;
  }

  get_track = async function(trackID) {
    const data = await this.api.getTracks([trackID]);
    return data.body;
  }
}
