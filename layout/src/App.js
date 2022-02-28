import './App.css';
import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount = async () =>{
    const res = await fetch('/user');
    const bodytext = await res.text();
    this.setState({
      textdb: bodytext
    })
  }
  render(){
    return (
      <div className="App">
        {this.state.textdb}
      </div>
    );
  }
}

export default App;
