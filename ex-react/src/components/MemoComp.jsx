import React, { Component } from 'react'

export class MemoComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        memoList : [
            {id:1, memo:"기록", time:new Date()},
            {id:2, memo:"연습", time:new Date()},
        ],
        inputMemo : ""
    }
    this.id = 3
  }


  addMemo = ()=>{
    const newMemoList = this.state.memoList.concat(
        {
            // id++는 후위연산자로 값을 할당(모든연산)이 끝난 후에
            // 값을 1 증가 시킨다
            id : this.id++,
            memo : this.state.inputMemo,
            time : new Date()
        }
    )
    this.setState({memoList : newMemoList})
  }

  // 메소드로 빠져나오면서 필요한 값은 매개변수로 가져오기
  deleteMemo = (id)=>{
    // filter를 사용 : 동일한 id를 제외한 배열 생성
    // filter의 함수의 결과가 참일때 배열
    const newMemoList = this.state.memoList.filter(
        (m)=>m.id !== id
    )
    this.setState({memoList:newMemoList})
}

  // 시간 값을 편하게 출력하기 위한 메소드
  // 출력 return을 통해서 화면에 출력 가능
  // 시간을 출력하기위해 time 값 가져옴
  printClock = (time) =>{
    // 가능하면 this.setState사용X
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${hours}:${minutes}:${seconds}`
  }

  render() {
    return (
      <div>
        <h3>메모리스트 출력</h3>
        <input
            onChange={(e)=>{this.setState({inputMemo:e.target.value })}}
            type="text"
            value={this.state.inputMemo}
        />
        <button 
          onClick={this.addMemo}
        >
            메모 추가
        </button>
        <ul>
            {
                this.state.memoList.map((memo)=>
                <li 
                    key={memo.id}
                    onClick={()=>{this.deleteMemo(memo.id)}}
                >
                    {memo.id}. {memo.memo} 시간:{this.printClock(memo.time)}
                </li>
                )
            }
        </ul>
      </div>
    )
  }
}

export default MemoComp