import React from 'react'
import data from '../data/dummy.json'

import { useState, useContext } from 'react'
import DataContext from '../context/DataContext'
import {Link} from 'react-router-dom'

//json을 이용한 데이터 들고와서
//목록 출력

export default function BoardList() {
    //const [dataList, setDataList] = useState(data);
    // 위의 코드(json값)말고 DataContext에서 값을 가져와서 사용할 것임
    // {state : {boardlist}, action : {setBoardList}}
    const value = useContext(DataContext);
  return (
    <div>
        <h3>BoardList</h3>
        <ul>
            {
                value.state.boardlist.map((data)=>(
                    <li key={data.id}>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
