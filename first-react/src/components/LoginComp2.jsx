import React, { Component } from 'react'

export class LoginComp2 extends Component {
    // state 생성
    constructor(props){
        super(props);
        this.state = {
            name : "",
            login : false
            
        }
    }
    inputChange = (e) =>{this.setState({name: e.target.value})};
    // loginMethod
    loginMethod = ()=>{this.setState({login:true})};
    render() {
        const {name, login} = this.state;
        return (
        <div>
            {/** className={login ? "on" : ""} 이런식으로 클래스네임을
             * 이용해서 디자인을 더 많이 추가할 수 있다.
             * style에 일일히 손을 대면 복잡하고 손이 많이 간다.
             * 나중에 className 하나로 조정할 수 있다.
             */}
            <h1 style={login? {display:'block'} : {display : 'none'}}>
                {name}, {login?"true":"false"}</h1>
                {/** 로그인 했을 때 아래 input과 p태그를 없애준다. */}
                <div style={{display : login?"none":"block"}}>
                    <p>이름을 입력하세요</p>
                    <input 
                        type="text" 
                        onChange={this.inputChange}
                    />
                    <button
                        onClick={this.loginMethod}
                    >
                        확인
                    </button>
                </div>
        </div>
        )
    }
}

export default LoginComp2