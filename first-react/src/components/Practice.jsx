// 16.8버전 이후로 함수형에서 state사용을 할 수 있게 되었음.
import {useState} from "react";
const Practice =(props)=>{

    const arrayMap1 = [2,4,6,8];
    const arrayMap2 = ["1", "2", "3", "4"];
    const arrayMap3 = [1,4,3,8];
    const array=[1,2,3,4,5,6,7];
    const arrayFilter1 = array.filter(x=> x%2==0);
    const arrayFilter2 = array.filter(x=>x<5);
    const arrayFilter3 = array.filter(x=>x!=6);
    const students = [
        {
            id:1,
            name : "홍길동",
            checked : true
        }
    ]
    return(
        <div>
            <h3> 각 요소에 2를 곱해 출력 </h3>
            <p>{
                    arrayMap1.map((num,i)=><p key={i}>{num*2}</p>)
                }
            </p>
            <hr></hr>
            <h3>각 요소를 문자열로 반환</h3>
            <p>
                {
                    arrayMap2.map((string, i)=><p key={i}>{string}</p>)
                }
            </p>
            <hr></hr>
            <h3>각 요소 중에서 짝수만 2를 곱한다.</h3>
            <p>
                {
                    arrayMap3.map((num,i)=><p key={i}>{num%2==0 ? num*2 : num}</p>)
                }
            </p>
            <hr />
            <h3>배열에서 짝수만 출력</h3>
            <p>
                {
                    arrayFilter1.map((num,i)=><p key={i}>{num}</p>)
                }
            </p>
            <hr />
            <h3>배열에서 5보다 작은 수만 출력</h3>
            <p>
                {
                    arrayFilter2.map((num,i)=><p key={i}>{num}</p>)
                }
            </p>
            <hr />
            <h3>배열에서 6만 빼고 출력</h3>
            <p>
                {
                    arrayFilter3.map((num,i)=><p key={i}>{num}</p>)
                }
            </p>
        </div>

    )
}

export default Practice;