import './App.css';
import React from 'react';
import { Router,NavLink } from 'react-router-dom';

class App extends React.Component{ //1
  constructor(props){
    super(props);
    this.state = {
      textdb : []
    }
  }
  componentDidMount = async () =>{ //3 ,async-비동기통신(서버랑 접속할게)
    const res = await fetch('/mylink/myport');
    const bodytext = await res.json(); //await 시간조절!

    const navitext = JSON.parse(bodytext.navidb);
    //JSON.parse(데이터 타입이 text );[]array로 인식{}object로 인식
      console.log(typeof navitext.length);
    //bodytext object 선언
    this.setState({ //다시 state값이 변경되었으므로 재랜더링 해야 변경값이 적용된 화면노출
      // textdb: bodytext.navidb.split(',')[2].substring(0,4)
      //반드시 이 함수 안에서 연동해야 재랜더링이됨!!
      textdb : navitext
    })
  }
  render(){  //2
    return (
      <div className="App">
        {
        this.state.textdb.map((item) => { //4
          return(
            <li><NavLink to={item[1]}>{item[0]}</NavLink></li>
          )
        })
        }
      </div>
    );
  }
}

export default App;
