import { element } from 'prop-types';
import React, { Component } from 'react'
import EventComp from './EventComp';

export class RefDomEvent extends Component {
    constructor(props){
        super(props)
        // 1. input태그가 들어갈 공간(변수)
        this.textInput = null;
        // 2. ref 콜백함수를 통해 DOM에 접근
        // 1) ref에 들어갈 함수 작성(화살표 함수)
        this.setTextInputRef = (element)=>{
            //2) element를 통해서 ref를 통해 DOM가져옴
            // 3) 저장해서 쓰기 위해 만든 공간에 할당
            this.textInput = element;
        }
        // 16.3버전 이후에 사용 가능 
        this.myRef = React.createRef();
        this.myRef2 = React.createRef();
        // createRef 작성
        this.inputBackgroundRef = React.createRef();

        /**직접 작성한 컴포넌트도 ref를 통해 들고올 수 있다. */
        this.myComp = React.createRef();
    }

    // this.textInput에 접근하는 메소드
    textInputEvent = () => {
        if(this.textInput){
            // ref를 통해서 DOM을 가져와서 그 안에 있는 내용에
            // JS에서 id통해 가져온 것처럼 접근할 수 있다.
            this.textInput.focus()
        }
    }
    // myRef 확인
    myRefEvent = ()=>{
        if(this.myRef.current){
            this.myRef.current.focus();
        }
    }
    myRefEvent2 = ()=>{
        if(this.myRef2.current){
            this.myRef2.current.style.backgroundColor ="red";
        }
    }
    render() {
    return (
        <div>
            <h1>Ref를 통해 input 가져오기</h1>
            <input type="text" 
            // 3. ref 속성을 이용해서 setTextInputRef를 호출
                ref={this.setTextInputRef}
            />
            <button onClick={()=>{console.log(this.textInput)}}>
                console에 textInput출력
            </button>
            <button
                onClick={this.textInputEvent}
            >
                버튼을 누르면 input에 포커스
            </button>

            <input 
                type="text" 
                ref={this.myRef}
            />
            <button>
                myRef의 값 확인
            </button>
            <button
                onClick={this.myRefEvent}
            >
                myRef에 포커스
            </button>
            <h1>콜백 함수와 createRef를 통한 ref 설정 실습</h1>
            <p>
                TestRefClass에서 ref콜백과 React.createRef를 사용해서
                클릭했을 때, input의 style의 backgroundColor 값을 red로 바꿔주세요
            </p>
            <input 
                type="text" 
                ref={this.myRef2}
            />
            <button onClick={this.myRefEvent2}>
                색을 바꿉니다.
            </button>

            <input type="text" 
                ref={this.inputBackgroundRef}
            />
            <button
                onClick={()=>{this.inputBackgroundRef.current.backgroundColor="red"}}
            >
                색을 바꿉니다.
            </button>
            <hr />
            <h3> 컴포넌트를 불러와서 ref를 통해 가져올 수 있다.</h3>
            <EventComp ref={this.myComp}/>
            <button
                // 컴포넌트를 ref로 들고오게 되면 그 컴포넌트에 있는
                // 메소드, state, props에 다 접근할 수 있다.
                // state와 props의 경우 값을 가져올 수 있고
                // 메소드의 경우 메소드를 실행할 수 있다.
                // >> 부모에서 자식 컴포넌트의 값을 가져오거나,
                //      메소드를 실행하고 싶을 때 사용가능
                onClick={()=>{console.dir(this.myComp.current)}}
            >
                ref로 들고온 myComp확인
            </button>
            <hr />
            <h3>
                리액트에서 이벤트를 사용할 때 화살표 함수/익명 함수 넣어서
                사용하는 이유
            </h3>
            <p>
                자바스크립트에서 addEventListsener를 사용할 때와 동일한
                이유
            </p>
            <p>
                addEventListsener를 사용할 때 함수를 넣을 때
                함수 이름을 넣어서 실행
                그래서 함수이름() 실행한 결과를 넣어주면, 이벤트가 실행할 때마다
                되는 것이 아니라, 화면이 렌더할 때 실행
            </p>
        </div>
        )
    }
}

export default RefDomEvent