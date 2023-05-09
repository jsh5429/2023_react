import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Story() {
  const value = useContext(DataContext);
  const { list } = value.state;
  const {name} = useParams();
  // params값으로 들고온 name과 context로 들고온 list에서 find로 일치하는 객체의
  // name과 같은 경우 storyDate에 그 객체를 넣는다.
  // filter는 값을 배열로 출력한다.
  const storyDate = list.find((d)=>d.name == name);
  //console.log(list)
  //console.log(storyDate);
  const params = useParams();
  const picture = storyDate.picture;
  //console.log(picture);
  return (
    <div className='story-style'>
        <h3>{params.name}-Story</h3>
        <img src={picture} alt="과일그림" />
        <p>{storyDate.detail}</p>
    </div>
  )
}
