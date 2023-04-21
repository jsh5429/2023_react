import React, {useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

// json 내용 대신에
// DataContext에 있는 boardlist 들고와서 화면에 출력하기
import data from '../data/dummy.json';

import { useContext } from "react";
import DataContext from '../context/DataContext';


// id로 구분하기 위해 board에 data의 내용이 필요함
export default function Board(){
    //useNavigate를 사용하면 함수를 이용해서 화면이동가능
    const navigate = useNavigate();

    const {id} = useParams();
}
