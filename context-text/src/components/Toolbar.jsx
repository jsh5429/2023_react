import React from 'react'
import { useContext } from 'react';
//context의 값을 사용하고자하는 공간에
// 작성한 ThemeContext를 가져온다.

import ThemeContext from '../context/ThemeContext';
import ObjectContext from '../context/ObjectContext';

export default function Toolbar(props) {
  return (
    <div>
        {/** 클래스형 컴포넌트 */}
        <ThemedButton />
        {/** 함수형 컴포넌트 */}
        <MyButton />
    </div>
  )
}

// 클래스형 컴포넌트로 전달
class ThemedButton extends React.Component {
    //클래스형 컴포넌트에서 context 값을 사용하기 위해서
    // contextType에 import해온 ThemeContext를 가져와서
    // 쓸 수 있다.
    // value로 전달한 문자열(light)가 들어가있다.
    static contextType = ThemeContext;
    render() {
        // 호출할 때는 this.context를 통해서 호출
        return <button>클래스형에서 Context:{this.context}</button>
    }
}

function MyButton() {
    // 함수형 컴포넌트에서 ThemeContext를 통해서 값 받아오기
    // useContext를 통해서 값을 받아올 수 있다.
    // useContext로 받아올 변수의 이름은 자율로 정한다.
    // ThemeContext에서 작성한 value 문자열 : light

    // dark라고 뜨는 이유는
    // ThemeContext로 감싸지않고 사용할 경우
    // ThemeContext를 초기화 할 때 넣은 값으로 출력되기 때문
    // const ThemeContext = React.createContext("초기값");
    const context = useContext(ThemeContext);

    // 객체로 전달된 값은 객체로 사용된다.
    // {name : "홍길동", login : true}
    const user = useContext(ObjectContext);

    // {}안에 user && <- 이건 왜했지??
    return <div>
        <h3>{context}</h3>
        {
            user && <button>{user.name}의 버튼입니다.</button>
        }
    </div>
}
