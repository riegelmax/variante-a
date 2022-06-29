import react from "react"
import Track from "../Track/track"
import "./TrackList.css"


export class TrackList extends react.Component{
    render(){
        return <div className="TrackList">
           {this.props.tracks.map(track=> {return <Track track={track} key={track.id} onAdd={this.props.onAdd} />})
           } 
        </div>
    }
}
export default TrackList