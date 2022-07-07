import React from "react";
import "./App.css";
import  Button2  from "../Results/results";
class App extends React.Component{
  constructor(props){
super(props);
  }

  
    render(){
        return(<div>
  <h1>Namensgenerator für unsinnige Trendgetränke</h1>
  <div className="App">
   <Button2/>
   
  </div>

</div>
        )
    }
}

export default App;