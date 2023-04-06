import './App.css';
import PropsComp from './components/PropsComp';
import CountComp from './components/CountComp';
import CountPropsComp from './components/CountPropsComp';

import LoginComp from './components/LoginComp';

import MemoComp from './components/MemoComp';
import LifeCycle from '../../first-react/src/components/LifeCycle';

function App() {
  return (
    <div className="App">
      {/** props을 사용하는 클래스컴포넌트 작성*/}
      <PropsComp color="blue">
        props값을 받아와서 글자색을 바꿉니다
      </PropsComp>
      {/** state을 사용하는 클래스컴포넌트 작성
       * 버튼을 클릭할때마다 10씩 증가하는 컴포넌트
       */}
      <CountComp />
      {/** props, state을 사용하는 클래스컴포넌트 작성
       * props의num값을 가져와서 버튼을 클릭할때마다 num씩증가
      */}
      <CountPropsComp num={20} />

      {/** LoginComp 작성후 
       *  state : name , login : false 
       *  <input>에서 name 받아오기
       *  <button>에서 login true 만들기
       *  <h1> name 출력  > login값이 true일때 화면에 보임
       */}
      <LoginComp />

      {/** 기록장 작성 >> css 추가해서 디자인
       * memoList : [
       *      {id:1, memo:"기록", time:new Date()},
       *      {id:2, memo:"연습", time:new Date()}
       *   ]
       * state를 이용하여, memoList의 내용을 map으로
       * li태그에 출력하세요
       * input 태그로 입력, button 클릭 추가, li 클릭 삭제
       */}
      <MemoComp />

      <LifeCycle />
    </div>
  );
}

export default App;
