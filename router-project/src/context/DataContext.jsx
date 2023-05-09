import React, { useState } from "react";

const DataContext = React.createContext("");
const DataProvider = ({children}) =>{
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
    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
}
export {DataProvider}
export default DataContext