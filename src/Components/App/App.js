import React from "react";
import "./App.css";
import Button from "../Button/button"

class App extends React.Component{
  constructor(props){
super(props);

this.state={
  searchResults: [
    {name:"name",artist: "artist",album: "album",id: 1},
    {name:"name",artist: "artist",album: "album",id: 2},
    {name:"name",artist: "artist",album: "album",id: 3}
  ],
  playlistName: "Playlist Name",
  playlistTracks: [{name:"testname",artist: "testartist3",album: "testalbum3",id: 121},{name:"testname3",artist: "testartist",album: "testalbum",id: 11}]
};
this.addTrack = this.addTrack.bind(this);
}
  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }else{this.state.playlistTracks.push(track)}
  }
    render(){
        return(<div>
  <h1>Namensgenerator für unsinnige Trendgetränke</h1>
  <div className="App">
   
   
      <Button />
      
  </div>
</div>
        )
    }
}

export default App;