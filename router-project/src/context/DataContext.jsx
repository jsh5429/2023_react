import React, { useState } from "react";

const DataContext = React.createContext("");

// 데이터 값을 가진 provider컴포넌트 작성
// Provider 안에 있는 컴포넌트를 전달받는 children
const DataProvider = ({children}) =>{
    // 데이터를 저장 및 수정하기 위해 useState사용
    const [list, setList] = useState(
        [
            {
                name : "apple",
                detail : "사과입니다",
                picture : 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg'
    
            },
            {
                name :"orange",
                detail : "오렌지입니다" ,
                picture : "https://cdn.pixabay.com/photo/2016/01/02/02/03/orange-1117645_960_720.jpg"
    
            },
            {
                name : "peach",
                detail : "복숭아입니다" ,
                picture : "https://cdn.pixabay.com/photo/2017/08/11/17/41/peach-2632182_960_720.jpg"
            }
        ]
    );
    // value에 담을 데이터 정리
    const value = {
        state : { list },
        action : { setList }
    }
    
    // {} 안에 있는 value는 위에서 사용자가 선언하고 할당한 value
    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
}

// 값을 전달하기 위해 감싸는 컴포넌트
export {DataProvider}
// 값을 사용하기 위해 호출하는 컴포넌트
export default DataContext