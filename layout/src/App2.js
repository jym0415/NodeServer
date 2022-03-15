import './App.css';
import React from 'react';
class App extends React.Component{ //첫번째
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount = async () =>{ //세번째 ,async-비동기통신(서버랑 접속할게)
    const res = await fetch('/user');
    const bodytext = await res.text();
    this.setState({
      textdb: bodytext
    })
  }
  render(){  //두번째
    return (
      <div className="App">
        {this.state.textdb}
      </div>
    );
  }
}

export default App;
