import React, { Component } from 'react'
import LoginComp from './LoginComp';

export class EventComp extends Component {
    // state 작성
    constructor(props){
        super(props);
        this.state = {
            name : "홍길동",
            address : "부산",
            toggle : true,
            color : "",
            input : "",
            inputNickname : "",
            inputBook : "",
            login : false
        }
        // 메소드에 .bind로 묶어서 this를 전달
        // 아래 this.printEvent는 작성한 메소드
        // 그 메소드에 .bind(this)로 연결
        this.printEvent = this.printEvent.bind(this);
        // this.printEvent 이름
        // 참고 ) let num = 0; num = num+1; >> num의 결과 : 1

        this.printAddress = this.printAddress.bind(this);
        this.setToggle = this.setToggle.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }
    // 이벤트 안에서 작성한 함수 그대로 들고와서 사용할 수 있다.
    // render에서 사용한 값을 쓸 수 없다. bind가 불가능(오류뜬다.)
    // 따라서 this.state.name을 통해서 접근해줘야한다.
    // 메소드에 바로 bind를 통해서 this를 묶어줄 수 없다.
    // 메소드만 만들어서 바로 사용하면 this를 찾지못해서 오류!
    // >> constructor에서 bind로 묶어서 사용한다.
    printEvent(){
        console.log("이벤트 출력");
        console.log(this.state.name);
    }

    printAddress(e){
        console.log(this.state.address);
    }
    
    // this.setState사용해서 값 수정
    setToggle(){
        // 앞에 부정값 !를 안붙이면 토글되지 않고 현재값 on만 나온다.
        this.setState({toggle: !this.state.toggle})
    }

    // this.setState 사용해서 color 값 수정
    changeColor(e) {
        // e.type을 통해서 setState에 값 다르게 넣을 수도 있다.
        // onMouseLeave에 changeColor를 추가하여
        // onMuseLeave이벤트가 발생헀을 때는 color:""
        console.log(e.type);
        if(e.type === "mouseenter"){
            this.setState({color : "red"})
        } else if (e.type === "mouseleave"){
            this.setState({color : ""})

        }
    }

    // 화살표 함수를 가지는 메소드
    arrowPrint=()=>{
        console.log("이벤트 실행");
        console.log(this.state.name);
    }

    changeName =()=>{
        console.log("이벤트 실행");
        this.setState({name : "성춘향"})
    }

    onInputChange = (e) => {
        // inputNickName을 그대로 사용하게되면 inpuNickName에만
        // 값이 들어간다.
        // e.target.name : name속성값을 가져와서 사용
        // 변수 값을 사용하려면 []에 담아서 사용해야한다.
        this.setState({[e.target.name] : e.target.value})
    }


    render() {
        
        // render 안에서 this = EventComp;이다.
        // this.state는 construct의 속성값
        const {name} = this.state; // state값이 없으면 오류가난다.
        //const {address} = this.state;
        return (
            // 이벤트를 위한 버튼 작성
            // console.log("이벤트 실행");
        <div>
            <h3>버튼을 클릭했을 때 console.log("이벤트 실행")</h3>
            <button
            // 실행할 함수 내용이 짧을 때
            // (화살표 함수를 이용하여 바로작성)
            // 이벤트 객체 사용가능
            // this를 사용했을 때 자기자신 클래스 컴포넌트 호출
            // > 클래스컴포넌트에서 사용하는 props과 state 호출
                onClick={(e)=>{console.log("이벤트 실행")}}
                >
                    화살표 함수를 사용해서 이벤트 실행
            </button>
            <button
            // 익명 함수를 사용해서 이벤트 객체 사용가능
            // this를 사용하면 연결된 객체가 없으므로 undefined가 출력된다.
            // html파일에서 js 익명함수를 들고 오면 window객체로 들고오지만
            // react에서 익명함수를 들고오면 this의 갑이 undefined이다.
            // react에서 익명함수를 사용하려면 함수의 this값을 연결해서 작성해야함
            // this값을 연결하기 위해 .bind()를 사용한다.
            // return 안에서 불러오는 this = EventComp이다.
                onClick={function(e){console.log(e,this)}.bind(this)}>
                익명함수를 사용해서 이벤트 실행
            </button>
            <h3>이벤트의 함수(메소드)를 따로 작성하는 방법</h3>
            <p>
                버튼을 눌렀을 때 console.log(이벤트출력)
                this state.name에 "홍길동"을 출력
            </p>
            <button
                onClick={function(){
                    console.log("이벤트 출력");
                    // name 값을 render에서 this.state값을 가져와서
                    // this를 연결하지 않아도 name 사용가능
                    console.log(name);
                }.bind(this)
            }
            >
                메소드를 사용한 이벤트
            </button>
            <button
            // 작성한 메소드를 들고올 때 this.를 통해 가져와야한다.
                onClick={this.printEvent
            }
            >
                메소드를 사용한 이벤트
            </button>
            {/** */}
            <button
                onClick={this.printAddress
            }
            >
                버튼을 누르면 state의 address 부산을 출력하고
                console.log를 이용하여 이벤트 완료 출력
            </button>

            {/**this.setState를 사용하는 메소드 */}
            <button
                onClick={function(){
                    // 앞에 부정값 !를 안붙이면 토글되지 않고 현재값 on만 나온다.
                    this.setState({toggle: !this.state.toggle})
                }.bind(this)
            }
            >
                {this.state.toggle ? "on" : "off"}
            </button>
            <button
                onClick={this.setToggle
            }
            >
                {this.state.toggle ? "on" : "off"}
            </button>
            {/** state의 color = ""
             * changeColor 메소드를 만들고, 
             * 메소드에서 this.state.color값을 "red"로 수정
             */}
            <p
                onMouseEnter={ this.changeColor }
                style={{color : this.state.color}}
                onMouseLeave={this.changeColor}
            > p태그에 마우스를 올리면 글자를 빨간색으로 바꾸기</p>

            {/** 화살표 함수로 메소드 만들어서 사용하기 */}
            <button
                onClick={()=>{
                    console.log("이벤트 실행");
                    console.log(this.state.name);
                }}
            >
                화살표 함수를 사용한 이벤트
            </button>
            <button
                onClick={this.arrowPrint}
            >
                화살표 함수를 사용한 이벤트
            </button>
            {/** 화살표 함수를 이용해서
             * 버튼을 클릭했을 때 name값을 성춘향으로 바꾸기
             */}
            <button
                onClick={this.changeName}
            >
                {name}
            </button>
            {/** form - input 태그의 값 사용하기 */}
            <h3>
                input태그에서 값을 가져올 state를 onChange를 사용해서
                수정
            </h3>
            <p>{this.state.input}</p>
            <input 
                type="text" 
                onChange={(e)=>{console.log(e.target.value)
                    this.setState({input : e.target.value})
                    // 한발짝 늦게 출력된다.
                    // setState는 비동기로 움직이기 때문에 늦는다.
                    // 그래서 바로
                    // state에 접근해서 값을 출력하려고 하면 이전값이 나온다.
                    // 이 부분에 주의할 것
                    // e.target.value로 접근하면 바로바로 나옴!
                    // console.log는 엄청 빠르게 연산되어 나온다.
                    // ++i 와 비슷하다고 보면 될듯. 코드가 넘어가면 바로 실행된다.
                    // 따라서 비동기인 setState와 같이 사용하면 순서가 뒤죽박죽 될 수있음
                    // 그래서 setState의 정확한 결과를 보려면 p태그의 this.state.input을 보는게
                    // 좋다. p태그의 내용은 setState가 끝난 뒤의 결과값만 나오기 때문에
                    // 더 정확하다. 함수가 실행되는 과정 중에 연산될 수 있는 console.log는 
                    // 확인용으로 쓰거나 아니면 따로 나누어서
                    // 쓰는게 깔끔할 수 있다.
                    console.log("input", this.state.input)
                }}
            />

            {/** change 공용함수 만들기 : 익숙하지 않다면 사용하지 않아도 무방 */}
            <h3>input 2개에서 값 받아오기</h3>
            <p>inputNickname의 값 : {this.state.inputNickname}</p>
            
            <input 
                name="inputNickName" // state속성이름과 동일
                type="text" 
                onChange={this.onInputChange}
            />
            <p>inputBook의 값 : {this.state.inputBook}</p>
            <input 
                type="text" 
                onChange={this.onInputChange}
            />
            {/** LoginComp 작성 후
             * state : name, login : false
             * <input>에서 name 받아오기
             * <button>에서 login true 만들기
             * <h1> name 출력 > login값이 true일 때 화면에 보여준다.
             */}
            
        </div>
        )
    }
}
export default EventComp