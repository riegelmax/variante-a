import react from "react"
import "./Playlist.css"
import TrackList from "../TrackList/TrackList"

export class Playlist extends react.Component{
    render(){
        return <div className="Playlist">
  <input defaultValue={"New Playlist"}/>
  <TrackList tracks={this.props.playlistTracks}/>
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>
    }
}
export default Playlist