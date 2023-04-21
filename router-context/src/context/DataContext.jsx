import React, { useState } from "react";

const DataContext = React.createContext("");

// 데이터 값을 가진 provider컴포넌트 작성
// Provider 안에 있는 컴포넌트를 전달받는 children
const DataProvider = ({children}) =>{
    // 데이터를 저장 및 수정하기 위해 useState사용
    const [boardlist, setBoardList] = useState(
        [
            { 
                id : 1,
                title : "첫번째 게시물입니다",
                content :"내용을 작성하였습니다",
                date : "2023-04-14",
                writer : "green"
            },
            { 
                id : 2,
                title : "두번째 게시물입니다",
                content :"내용을 작성하였습니다",
                date : "2023-04-14",
                writer : "green"
            }
        ]
    );
    // value에 담을 데이터 정리
    const value = {
        state : { boardlist },
        action : { setBoardList }
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