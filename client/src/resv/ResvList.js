import { React, useMemo, useState } from 'react';
import { useSelector } from "react-redux"
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './resvlist.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ReservePage from './ResvPage';

function ResvList(props) {
  
  let state = useSelector((state) => { return state } )
  let navigate = useNavigate();

  let [id, setid] = useState('')
  let [자리, set자리] = useState('')
    
  useMemo(()=>{ return (
    axios.get('/reserve').then((결과)=>{  
      console.log(결과.data)
      let copy = [...결과.data]
      setresult(copy)
    })
  ) }, [])

  let [result, setresult] = useState([{
    const: "const1", const_sub: "바운스", id: "1", m_dep: "", m_phone: "010-9584-4567",  m_user: "이요한", 
    s1_dep: "영유아2부",  s1_phone: "010-1324-7894",  s1_user: "이송혜",  s2_dep: "영유아부",  s2_phone: "010-1234-5678",  s2_user: "조효정",
    s3_dep: "영유아3부", s3_phone: "010-1234-7894", s3_user: "우덕인", s4_dep: "13", s4_phone: "15", s4_user: "14",
    s5_dep: "16", s5_phone: "18", s5_user: "17", s6_dep: "19", s6_phone: "21", s6_user: "20",
    s7_dep: "22", s7_phone: "24", s7_user: "23", s8_dep: "25", s8_phone: "27", s8_user: "26",
    s9_dep: "28", s9_phone: "30", s9_user: "29"
  }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
  ])

  return (
      <div className="resvlist">

        {/* <button onClick={()=>{
          console.log(list)
        }}>test</button> */}

        <div className='resvlist_notice'>
          <div className='resvlist_notice_inner red'>
            <FontAwesomeIcon icon={faUser}/>모양을 누르시면, 입력란이 나옵니다.
          </div>
          <div className='resvlist_notice_inner red'>
            <div><button className='button' style={{ backgroundColor: 'rgb(170, 243, 163)' }}><FontAwesomeIcon icon={faUser}/></button>예약가능</div>
            <div>&nbsp;&nbsp;/&nbsp;&nbsp;</div>
            <div><button className='button' style={{ backgroundColor: '#dbdbdb' }}><FontAwesomeIcon icon={faUser}/></button>예약완료</div>
          </div>
          <div className='resvlist_notice_inner'>
            이미 예약되어 있는 시간은, 예약할 수 없습니다.
          </div>
          <div className='resvlist_notice_inner add1'>
          Main스텝 : 한 부스의 메인 스텝으로서, 처음부터 마칠 때까지 담당하여 책임져주시면 됩니다.
          <br></br><br></br>보조스텝 : 1시간~1시간30분 정도 섬겨주시는 자리입니다. 중복 선택도 가능합니다. 가능한 시간 모두 선택해주시면 감사하겠습니다.
          </div>
          <div className='resvlist_notice_inner add2 red'>
            스텝 모집은 4/30(주일)까지 진행합니다. 스텝 예약이 없는 기구나 부스는, 제외 될 수 있습니다.
          </div>
          <div className='resvlist_notice_inner add3'>
          - 스텝 부스 현황 -
          <br></br>1.놀이기구부스 : 밀리터리 바운스, 중형바운스1, 중형바운스2
          <br></br>2.미션부스 : 투호, 고리던지기, 주사위던지기, 딱지치기, 축구공차기, 제기차기, 다리가위바위보, 구절쓰기
          <br></br>3.먹거리부스 : 추억의과자 (다른 먹거리 부스들은 각 부서에서 담당합니다)
          </div>
        </div>

      <Routes>
        <Route path="/" element={
          <div className="resvlist">
        {
          result.map((a,i)=>{
            return ( 
            
            <div className="resvlist_cover">
              <div className="resvlist_title">
                <div className="resvlist_title_img">
                  <img src={`${state.images[i].img}`}></img>
                </div>
                <div className="resvlist_title_name">
                  <div className="name_main">{result[i].const}</div>
                  <div className="name_sub">{result[i].const_sub}</div>
                </div>
              </div>
              <div className="resvlist_content">
                <div className="resvlist_timebox">
                  <div className="resvlist_name">시간</div>
                  <div className="resvlist_text">11:30<br></br>~13:00</div>
                  <div className="resvlist_text">13:00<br></br>~14:00</div>
                  <div className="resvlist_text">14:00<br></br>~15:00</div>
                </div>

                <div className="resvlist_reservebox1">
                  <div className="resvlist_name">Main스텝</div>
                  <div className="resvlist_text maincover">
                    <div className="resvlist_text_inner maindiv">
                      <div className="resvlist_text_lt">
                        <button 
                            style={ result[i].m_dep === null || result[i].m_dep === "" 
                            ? { backgroundColor: 'rgb(170, 243, 163)' } : { backgroundColor: '#dbdbdb' } }
                            className='button' onClick={()=>{
                            set자리('m'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].m_dep}
                      </div>
                      <div className="resvlist_text_rt">{result[i].m_user}</div>
                    </div>
                    <div className="resvlist_text_inner">
                      <a href={`tel:${result[i].m_phone}`}>
                      {result[i].m_phone}</a>
                    </div>
                  </div>
                </div>

                <div className="resvlist_reservebox2">
                  <div className="resvlist_name">보조스텝</div>
                  
                  <div className="resvlist_text">
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                        <button 
                              style={ result[i].s1_dep === null || result[i].s1_dep === "" 
                              ? { backgroundColor: 'rgb(170, 243, 163)' } : { backgroundColor: '#dbdbdb' } }
                              className='button' onClick={()=>{
                              set자리('s1'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s1_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s1_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      <a href={`tel:${result[i].s1_phone}`}>
                      {result[i].s1_phone}</a>
                      </div>
                    </div>
                    
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button 
                              style={ result[i].s2_dep === null || result[i].s2_dep === "" 
                              ? { backgroundColor: 'rgb(170, 243, 163)' } : { backgroundColor: '#dbdbdb' } }
                              className='button' onClick={()=>{
                              set자리('s2'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s2_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s2_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      <a href={`tel:${result[i].s2_phone}`}>
                      {result[i].s2_phone}</a>
                      </div>
                    </div>
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button 
                              style={ result[i].s3_dep === null || result[i].s3_dep === "" 
                              ? { backgroundColor: 'rgb(170, 243, 163)' } : { backgroundColor: '#dbdbdb' } }
                              className='button' onClick={()=>{
                              set자리('s3'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s3_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s3_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      <a href={`tel:${result[i].s3_phone}`}>
                      {result[i].s3_phone}</a>
                      </div>
                    </div>
                  </div>

                  <div className="resvlist_text">
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button 
                              style={ result[i].s4_dep === null || result[i].s4_dep === "" 
                              ? { backgroundColor: 'rgb(170, 243, 163)' } : { backgroundColor: '#dbdbdb' } }
                              className='button' onClick={()=>{
                              set자리('s4'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s4_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s4_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      <a href={`tel:${result[i].s4_phone}`}>
                      {result[i].s4_phone}</a>
                      </div>
                    </div>
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button 
                              style={ result[i].s5_dep === null || result[i].s5_dep === "" 
                              ? { backgroundColor: 'rgb(170, 243, 163)' } : { backgroundColor: '#dbdbdb' } }
                              className='button' onClick={()=>{
                              set자리('s5'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s5_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s5_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      <a href={`tel:${result[i].s5_phone}`}>
                      {result[i].s5_phone}</a>
                      </div>
                    </div>
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button 
                              style={ result[i].s6_dep === null || result[i].s6_dep === "" 
                              ? { backgroundColor: 'rgb(170, 243, 163)' } : { backgroundColor: '#dbdbdb' } }
                              className='button' onClick={()=>{
                              set자리('s6'); setid(i);  navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s6_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s6_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      <a href={`tel:${result[i].s6_phone}`}>
                      {result[i].s6_phone}</a>
                      </div>
                    </div>
                  </div>

                  <div className="resvlist_text">
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button 
                              style={ result[i].s7_dep === null || result[i].s7_dep === "" ? 
                              { backgroundColor: 'rgb(170, 243, 163)' } : { backgroundColor: '#dbdbdb' } }
                              className='button' onClick={()=>{
                              set자리('s7'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s7_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s7_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      <a href={`tel:${result[i].s7_phone}`}>
                      {result[i].s7_phone}</a>
                      </div>
                    </div>
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button 
                              style={ result[i].s8_dep === null || result[i].s8_dep === "" ? 
                              { backgroundColor: 'rgb(170, 243, 163)' } : { backgroundColor: '#dbdbdb' } }
                              className='button' onClick={()=>{
                              set자리('s8'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s8_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s8_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      <a href={`tel:${result[i].s8_phone}`}>
                      {result[i].s8_phone}</a>
                      </div>
                    </div>
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button 
                              style={ result[i].s9_dep === null || result[i].s9_dep === "" ? 
                              { backgroundColor: 'rgb(170, 243, 163)' } : { backgroundColor: '#dbdbdb' } }
                              className='button' onClick={()=>{
                              set자리('s9'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s9_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s9_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      <a href={`tel:${result[i].s9_phone}`}>
                      {result[i].s9_phone}</a>
                      </div>
                    </div>
                  </div>

                </div>

                
              </div>
              <div className="resvlist_contact">
                <div className='resvlist_contactbox'>
                  <div className='contact_font'>
                    <a href='sms:010-9584-5948?body=00시부터00시까지 예약한 00부 000. 삭제요청 드립니다'>
                    <FontAwesomeIcon icon={faPhone}/><span></span> (클릭)</a> 예약삭제요청 및 문의
                  </div>
                  <div className='contact_font'>
                  <a href='sms:010-9584-5948?body=00시부터00시까지 예약한 00부 000. 삭제요청 드립니다'>
                  010-9584-5948</a>
                  으로 문자나 카톡을 남겨주세요
                  </div>
                  
                </div>
              </div>

            </div>

            )})
            
          }

      </div>
        }></Route>

        <Route path="/resvpage" element={<ReservePage
          id={id} 자리={자리}
        ></ReservePage>}/>

      </Routes>    


      

    </div>
      
  );
}

export default ResvList;

