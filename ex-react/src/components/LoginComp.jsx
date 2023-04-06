import React, { Component } from 'react'

export class LoginComp extends Component {
  // state 생성
  constructor(props) {
    super(props);
    this.state = {
      name : "",
      login :false
    }
  }

  // inputChange
  inputChange = (e)=>{this.setState({name:e.target.value})};

  // loginMethode
  loginMethode = ()=>{this.setState({login:true})};

  render() {
    const {name, login} = this.state;
    return (
      <div>
        {/** className={login ? "on": ""} 클래스네임을 이용해서디자인추가 */}
        <h1 style={ login ? {display:'block'} : {display:'none'} }>
          {name},{login?"true":"false"}
        </h1>
        <div style={{display: login? "none":"block"}}>
          <p>이름을 입력하세요</p>
          <input 
            onChange={this.inputChange}
            type="text" 
          />
          <button
            onClick={this.loginMethode}
          >
            확인
          </button>
        </div>
      </div>
    )
  }
}

export default LoginComp