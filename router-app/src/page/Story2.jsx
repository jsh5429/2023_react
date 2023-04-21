import React from 'react'
import { useParams } from 'react-router-dom'

export default function Story2() {

    const params2 = useParams();
    // 구조화 할당
    const {name} = useParams(); // 객체값으로 들어가있는 Params값
  return (
    <div>
        <h1>{params2.name}-Story2</h1>
        <p>{name}story2 페이지입니다.</p>

    </div>
  )
}
