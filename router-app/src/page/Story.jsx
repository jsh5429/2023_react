import React from 'react'

// URL 파라미터 값을 가져오는 함수
// Params : 파라미터의 줄임말
import { useParams } from 'react-router-dom'

export default function Story() {
    {/** 아래 params, value 둘다 같은 값이다. */}
    // URL 파라미터로 전달된 값을 useParams()를 이용하여 가져올 수 있다.
    // *주소의 위치에 맞게 전달
    // app.js path='/story/:value'
    // >> 주소로 값을 전달할 때 /story/apple
    const params = useParams();
    // 구조화 할당
    const {value} = useParams(); // 객체값으로 들어가있는 Params값
  return (
    <div>
        <h1>{params.value}Story</h1>
        <p>{value}story 페이지입니다.</p>


    </div>
  )
}
