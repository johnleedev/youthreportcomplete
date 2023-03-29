import { React, useMemo, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './resvlist.css';
import miiltery from '../images/militery.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ReservePage from './ResvPage';

function ResvList(props) {
  
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
    const: "const1", id: "1", m_dep: "고등부", m_phone: "010-9584-4567",  m_user: "이요한", 
    s1_dep: "영유아2부",  s1_phone: "010-1324-7894",  s1_user: "이송혜",  s2_dep: "7",  s2_phone: "9",  s2_user: "8",
    s3_dep: "영유아3부", s3_phone: "010-1234-7894", s3_user: "우덕인", s4_dep: "13", s4_phone: "15", s4_user: "14",
    s5_dep: "16", s5_phone: "18", s5_user: "17", s6_dep: "19", s6_phone: "21", s6_user: "20",
    s7_dep: "22", s7_phone: "24", s7_user: "23", s8_dep: "25", s8_phone: "27", s8_user: "26",
    s9_dep: "28", s9_phone: "30", s9_user: "29"
  }, {}, {}, {}
  ])
  

  return (
      <div className="resvlist">

      <Routes>
        <Route path="/" element={
          <div className="resvlist">
        {
          result.map((a,i)=>{
            return ( 
            
            <div className="resvlist_cover">
              <div className="resvlist_title">
                <div className="resvlist_title_img">
                  <img src={miiltery}></img>
                </div>
                <div className="resvlist_title_name">{result[i].const}</div>
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
                        <button className='button' onClick={()=>{
                            set자리('m'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].m_dep}
                      </div>
                      <div className="resvlist_text_rt">{result[i].m_user}</div>
                    </div>
                    <div className="resvlist_text_inner">
                      {result[i].m_phone}
                    </div>
                  </div>
                </div>

                <div className="resvlist_reservebox2">
                  <div className="resvlist_name">보조스텝</div>
                  
                  <div className="resvlist_text">
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                        <button className='button' onClick={()=>{
                              set자리('s1'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s1_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s1_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      {result[i].s1_phone}
                      </div>
                    </div>
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button className='button' onClick={()=>{
                              set자리('s2'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s2_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s2_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      {result[i].s2_phone}
                      </div>
                    </div>
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button className='button' onClick={()=>{
                              set자리('s3'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s3_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s3_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      {result[i].s3_phone}
                      </div>
                    </div>
                  </div>

                  <div className="resvlist_text">
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button className='button' onClick={()=>{
                              set자리('s4'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s4_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s4_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      {result[i].s4_phone}
                      </div>
                    </div>
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button className='button' onClick={()=>{
                              set자리('s5'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s5_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s5_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      {result[i].s5_phone}
                      </div>
                    </div>
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button className='button' onClick={()=>{
                              set자리('s6'); setid(i);  navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s6_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s6_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      {result[i].s6_phone}
                      </div>
                    </div>
                  </div>

                  <div className="resvlist_text">
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button className='button' onClick={()=>{
                              set자리('s7'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s7_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s7_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      {result[i].s7_phone}
                      </div>
                    </div>
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button className='button' onClick={()=>{
                              set자리('s8'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s8_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s8_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      {result[i].s8_phone}
                      </div>
                    </div>
                    <div className="resvlist_text_box">
                      <div className="resvlist_text_inner">
                        <div className="resvlist_text_lt">
                          <button className='button' onClick={()=>{
                              set자리('s9'); setid(i); navigate('/resvlist/resvpage');
                        }}><FontAwesomeIcon icon={faUser}/></button>&nbsp;{result[i].s9_dep}</div>
                        <div className="resvlist_text_rt">{result[i].s9_user}</div>
                      </div>
                      <div className="resvlist_text_inner">
                      {result[i].s9_phone}
                      </div>
                    </div>
                  </div>

                </div>

                
              </div>
              <div className="resvlist_contact">
                <div className='resvlist_contactbox'>
                  <div className='contact_font'>
                    <a href='tel:010-9584-5948'>
                    <FontAwesomeIcon icon={faPhone}/><span></span> (클릭)</a> 예약삭제요청 및 문의 
                  </div>
                  <div className='contact_font'>
                  <a href='tel:010-9584-5948'>
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

