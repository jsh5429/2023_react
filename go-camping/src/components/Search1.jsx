import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import '../img/camp5.jpg';

export default function Search1() {
  const navigate = useNavigate();
  const [camping, setCamping] = useState([]);
  const [query, setQuery] = useState("");
  const [select, setSelect] = useState();
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  // select에 따라 결과값이 나오는 함수
  const handleSelectChange = (event) =>{
    setSelect(event.target.value);
  }

  const handleSelect1Change = (event) =>{
    setSelectedOption1(event.target.value);
    if(event.target.value == '경기도'){
      setSelectedOption2("optionA");
    } else if(event.target.value == '강원도'){
      setSelectedOption2("optionB");
    } else if(event.target.value == '충청북도'){
      setSelectedOption2("optionC");
    } else if(event.target.value == '충청남도'){
      setSelectedOption2("optionD");
    } else if(event.target.value == '전라북도'){
      setSelectedOption2("optionE");
    } else if(event.target.value == '전라남도'){
      setSelectedOption2("optionF");
    } else if(event.target.value == '경상북도'){
      setSelectedOption2("optionG");
    } else if(event.target.value == '경상남도'){
      setSelectedOption2("optionH");
    } else if(event.target.value == '제주도'){
      setSelectedOption2("optionI");
    } 
  }

  const handleSelect2Change = (event) =>{
    setSelectedOption2(event.target.value);
  }

  const search = (selectedOption1, selectedOption2) => {
    return camping.filter((c)=> c.주소.includes(selectedOption1) && c.주소.includes(selectedOption2));
  }

  const results = search(selectedOption1, selectedOption2);

  // axios를 통해 값을 받아오기 위해
  // 비동기 함수 작성(effect 안에 있거나 밖에 있어도 무관하다)
  // useEffect를 사용해서 실행할 때 바로 값을 가져오기 위해서
  useEffect(()=>{
    async function getCamping(){
      try{
        const response = await axios.get('https://api.odcloud.kr/api/15037499/v1/uddi:1fe51f51-e956-425b-a9e3-e4555cb57880?page=1&perPage=30&serviceKey=16qfjKE0H8Wubhw36JDAEZM7Dl5ibX9Wg%2FR5ZW61nv5gLjyCobUcnW1ZSyLPfomh8esMgKij%2FtJMUHXsJ%2BdIYQ%3D%3D');
        console.log(response);
        console.log(response.data.data[0]["개수대"]);
        setCamping(response.data.data);
      } catch (error){
        console.error(error);
      }
    }

    console.log(camping);
    getCamping();
  },[]);

  return (
    <div style={{backgroundColor : "#BFAE99", marginTop : "105px"}}>
        <h1 style={{textAlign : "center", padding : "30px"}}>상세검색창</h1>
        <button>태그 검색창</button>
        <form>
          <ul>
            <li>
              <div style={{textAlign : "center"}}>
                <label>지역 : 도/시 </label>
                <select placeholder='전체/도' value={selectedOption1} onChange={handleSelect1Change}
                style={{width : "200px", height : "30px", fontSize : "1rem"}}>
                  <option value="">전체</option>
                  <option value="서울" selected="selected">서울</option>
                  <option value="부산">부산</option>
                  <option value="대구">대구</option>
                  <option value="인천">인천</option>
                  <option value="광주">광주</option>
                  <option value="대전">대전</option>
                  <option value="울산">울산</option>
                  <option value="세종">세종</option>
                  <option value="경기도">경기도</option>
                  <option value="강원도">강원도</option>
                  <option value="충청북도">충청북도</option>
                  <option value="충청남도">충청남도</option>
                  <option value="전라북도">전라북도</option>
                  <option value="전라남도">전라남도</option>
                  <option value="경상북도">경상북도</option>
                  <option value="경상남도">경상남도</option>
                  <option value="제주도">제주도</option>
                </select>
                <label htmlFor=""> 시/군 </label>
                <select value={selectedOption2} onChange={handleSelect2Change} style={{width : "150px", height : "30px"}}>
                <option value="">전체</option>
                {
                  selectedOption1 == '경기도' ? (
                    <>
                      <option value="수원">수원</option>
                      <option value="성남">성남</option>
                      <option value="의정부">의정부</option>
                      <option value="안양">안양</option>
                      <option value="부천">부천</option>
                      <option value="광명">광명</option>
                      <option value="평택">평택</option>
                      <option value="동두천">동두천</option>
                      <option value="안산">안산</option>
                      <option value="고양">고양</option>
                      <option value="과천">과천</option>
                      <option value="구리">구리</option>
                      <option value="남양주">남양주</option>
                      <option value="오산">오산</option>
                      <option value="시흥">시흥</option>
                      <option value="군포">군포</option>
                      <option value="의왕">의왕</option>
                      <option value="하남">하남</option>
                      <option value="용인">용인</option>
                      <option value="파주">파주</option>
                      <option value="이천">이천</option>
                      <option value="안성">안성</option>
                      <option value="김포">김포</option>
                      <option value="화성">화성</option>
                      <option value="광주">광주</option>
                      <option value="양주">양주</option>
                    </>
                  ) : selectedOption1 === '강원도' ? (
                    <>
                      <option value="춘천">춘천</option>
                      <option value="원주">원주</option>
                      <option value="강릉">강릉</option>
                      <option value="동해">동해</option>
                      <option value="태백">태백</option>
                      <option value="속초">속초</option>
                      <option value="삼척">삼척</option>
                      <option value="홍천">홍천</option>
                      <option value="횡성">횡성</option>
                      <option value="영월">영월</option>
                      <option value="평창">평창</option>
                      <option value="정선">정선</option>
                      <option value="철원">철원</option>
                      <option value="화천">화천</option>
                      <option value="양구">양구</option>
                      <option value="인제">인제</option>
                      <option value="고성">고성</option>
                      <option value="양양">양양</option>

                    </>
                  ) : selectedOption1 === '충청북도' ? (
                    <>
                      <option value="청주">청주</option>
                      <option value="충주">충주</option>
                      <option value="제천">제천</option>
                      <option value="보은">보은</option>
                      <option value="옥천">옥천</option>
                      <option value="영동">영동</option>
                      <option value="증평">증평</option>
                      <option value="진천">진천</option>
                      <option value="괴산">괴산</option>
                      <option value="음성">음성</option>
                      <option value="단양">단양</option>
                    </>
                  ) : selectedOption1 === '충청남도' ? (
                    <>
                      <option value="천안">천안</option>
                      <option value="공주">공주</option>
                      <option value="보령">보령</option>
                      <option value="아산">아산</option>
                      <option value="서산">서산</option>
                      <option value="논산">논산</option>
                      <option value="계룡">계룡</option>
                      <option value="당진">당진</option>
                      <option value="금산">금산</option>
                      <option value="부여">부여</option>
                      <option value="서천">서천</option>
                      <option value="청양">청양</option>
                      <option value="홍선">홍선</option>
                      <option value="예산">예산</option>
                      <option value="태안">태안</option>

                    </>
                  ) : selectedOption1 === '전라북도' ? (
                    <>
                      <option value="전주">전주</option>
                      <option value="군산">군산</option>
                      <option value="익산">익산</option>
                      <option value="정읍">정읍</option>
                      <option value="남원">남원</option>
                      <option value="김제">김제</option>
                      <option value="완주">완주</option>
                      <option value="진안">진안</option>
                      <option value="무주">무주</option>
                      <option value="장수">장수</option>
                      <option value="임실">임실</option>
                      <option value="순창">순창</option>
                      <option value="고창">고창</option>
                      <option value="부안">부안</option>
                    </>
                  ) : selectedOption1 === '전라남도' ? (
                    <>
                      <option value="목포">목포</option>
                      <option value="여수">여수</option>
                      <option value="순천">순천</option>
                      <option value="나주">나주</option>
                      <option value="광양">광양</option>
                      <option value="담양">담양</option>
                      <option value="곡성">곡성</option>
                      <option value="구례">구례</option>
                      <option value="고흥">고흥</option>
                      <option value="보성">보성</option>
                      <option value="화순">화순</option>
                      <option value="장흥">장흥</option>
                      <option value="강진">강진</option>
                      <option value="해남">해남</option>
                      <option value="영암">영암</option>
                      <option value="무안">무안</option>
                      <option value="함평">함평</option>
                      <option value="영광">영광</option>
                      <option value="장성">장성</option>
                      <option value="완도">완도</option>
                      <option value="진도">진도</option>
                      <option value="신안">신안</option>
                    </>
                  ) : selectedOption1 === '경상북도' ? (
                    <>
                      <option value="포항">포항</option>
                      <option value="경주">경주</option>
                      <option value="김천">김천</option>
                      <option value="안동">안동</option>
                      <option value="구미">구미</option>
                      <option value="영주">영주</option>
                      <option value="영천">영천</option>
                      <option value="상주">상주</option>
                      <option value="문경">문경</option>
                      <option value="경산">경산</option>
                      <option value="군위">군위</option>
                      <option value="의성">의성</option>
                      <option value="청송">청송</option>
                      <option value="영양">영양</option>
                      <option value="영덕">영덕</option>
                      <option value="청도">청도</option>
                      <option value="고령">고령</option>
                      <option value="성주">성주</option>
                      <option value="칠곡">칠곡</option>
                      <option value="예천">예천</option>
                      <option value="봉화">봉화</option>
                      <option value="울진">울진</option>
                      <option value="울릉">울릉</option>
                    </>
                  ) : selectedOption1 === '경상남도' ? (
                    <>
                      <option value="창원">창원</option>
                      <option value="진주">진주</option>
                      <option value="통영">통영</option>
                      <option value="사천">사천</option>
                      <option value="김해">김해</option>
                      <option value="밀양">밀양</option>
                      <option value="거제">거제</option>
                      <option value="양산">양산</option>
                      <option value="의령">의령</option>
                      <option value="함안">함안</option>
                      <option value="창녕">창녕</option>
                      <option value="고성">고성</option>
                      <option value="남해">남해</option>
                      <option value="하동">하동</option>
                      <option value="산청">산청</option>
                      <option value="함양">함양</option>
                      <option value="거창">거창</option>
                      <option value="합천">합천</option>
                    </>
                  ) : selectedOption1 === '제주도' ? (
                    <>
                      <option value="제주시">제주시</option>
                      <option value="서귀포">서귀포</option>
                    </>
                  ) : selectedOption1 === '인천' ? (
                    <>
                      <option value="옹진">옹진군</option>
                    </>
                  ) : null
                }
              </select>
              </div>
            </li>
            <li>
            <li>
              <label htmlFor="">테마 </label>
              <select name="" id="" placeholder='전체테마'>
                <option value="" selected="selected">전체</option>
                <option value="해변">해변</option>
                <option value="강">강</option>
                <option value="산">산</option>
                <option value="호수">호수</option>
              </select>
            </li>
              
            </li>
            <ul style={{marginTop : "20px"}}>
                  {
                    results.map((c)=>(
                      <Card style={{width : "18rem", backgroundColor : "white", 
                      margin : "auto", width : "500px", marginBottom : "10px",
                      border : "1px solid black", padding : "10px"}}>
                        <Card.Img variant='top' src='../img/camp5.jpg'/>
                        <Card.Body>
                          <Card.Title style={{fontSize : "1.2rem"}}>{c["캠핑(야영)장명"]}</Card.Title>
                          <Card.Text>
                            <p>캠핑장구분 : {c["캠핑(야영)장구분"]}</p>
                            <br />
                            <p style={{fontSize : "0.8rem", color : "grey"}}>주소 : {c.주소}</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      
                    ))
                  }
            </ul>
          </ul>
        </form>
        <Footer />
    </div>  
  )
}
