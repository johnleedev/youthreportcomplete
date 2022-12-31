/*eslint-disable*/
import { React, useMemo, useState } from 'react';
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import './Dep.css'
import axios from 'axios'
import $ from "jquery";
import classnames from 'classnames';
import Basicdepmain from '../depdatabasic/Basicdepmain'
import Basicgroup from '../depdatabasic/Basicgroup'
import Date from '../depcommon/Date'
import Deptable from '../depcommon/Deptable';
import DateInput from '../depcommon/DateInput';
import BasicDatedata from '../depdatabasic/BasicDatedata'

function Dep1(props) {

  let state = useSelector((state) => { return state } )
  let navigate = useNavigate();

  useMemo(()=>{ return (
    axios.get(`/depmain`).then((결과)=>{ //부서별 수정할 것
      console.log(결과.data)
      let copy = [...결과.data]
      set_dmain(copy)
    }),
    axios.get(`/dep/1`).then((결과)=>{ //부서별 수정할 것
      console.log(결과.data)
      let copy = [...결과.data]
      set부서(copy)
    })
  ) }, [])

  let [dmain, set_dmain] = useState(Basicdepmain)
  let [부서, set부서] = useState(Basicgroup)
  let [date_data, setdate_data] = useState(BasicDatedata)

  // 지정날짜
  let [date, setdate] = useState('1 / 1')
  let date_origin = BasicDatedata.filter(e => e.date === `${date}`)
  let date_result = date_origin[0].day

  // 각y_이름
  let y_main = dmain.filter(e => e.dn === `dep1`) //부서별 수정할 것
  let y_copy = y_main.map(e => e.dan_ko)
  let y_ko = [...new Set(y_copy)] // ['1~2세', '3세', '4세']
  let y_copy2 = y_main.map(e => e.dan)
  let y_num = [...new Set(y_copy2)] // ['1-1', '1-2', '1-3']

  // 각소그룹
  var 각y_group = (da) => {
    let y_group = 부서.filter(e => e.an === `${da}`)
    let groupcopy = y_group.map(e => e.dgn_ko)
    let result = [...new Set(groupcopy)]
    return result
   } 
   // '1-1'입력시 ['1년첫번째반', '1년두번째반', '1년세번째반']
   // '1-2'입력시 ['2년첫번째반', '2년두번째반', '2년세번째반']
   // '1-3'입력시 ['3년첫번째반', '3년두번째반', '3년세번째반']

   var 각소그룹person_num = (da) => {
    let y_소그룹 = 부서.filter(e => e.an === `${da}`)
    let y_소그룹copy = y_소그룹.map(e => e.dgn)
    let result = [...new Set(y_소그룹copy)];
    return result
   }
    // '1-1'입력시 ['1-1-1', '1-1-2']
    // '1-2'입력시 ['1-2-1', '1-2-2']
    // '1-3'입력시 ['1-3-1', '1-3-2']


  // 각소그룹person
  var 각소그룹person = (da, da_ko) => {
    let 소그룹person = 부서.filter(e => e.an === `${da}`)
    let result = 소그룹person.filter(e => e.dgn_ko === `${da_ko}`)
    return result
  }
  // '1-1', '1년첫번째반' 입력시 
  // 0: {id: 1, dn: 'dep1', dn_ko: '영유아2부', an: '1-1', dgn: '1-1-1', …}
  // 1: {id: 2, dn: 'dep1', dn_ko: '영유아2부', an: '1-1', dgn: '1-1-1', …}
  // 2: {id: 3, dn: 'dep1', dn_ko: '영유아2부', an: '1-1', dgn: '1-1-1', …}
  // 3: {id: 4, dn: 'dep1', dn_ko: '영유아2부', an: '1-1', dgn: '1-1-1', …}
  

  // 각person
  var personlist = (dgn) =>{
    let person1 = 부서.filter(e => e.dgn === `${dgn}`) //부서별 수정할 것
    let person2 = person1.map(e => e.n)
    return person2
  }  
  // '1-1-1' 입력시 ['영유아부학생1', '영유아부학생2', '영유아부학생3', '영유아부학생4']
  // '1-1-2' 입력시 ['영유아부학생5', '영유아부학생6', '영유아부학생7', '영유아부학생8']


  // classNames
  let [show, setshow] = useState(`${y_ko[0]}`)
  let [color, setcolor] = useState('1')

  return (
    <div className='dep_main'>

      {/* 출석현황 */}
      <div className='dep_main_presentCondition'>

        <div className='dep_main_title'>
          {/* 1) 타이틀 */}           {/* 부서별 수정할 것 */}
          <div className='dep_main_text'>영유아2부</div> 
          {/* 2) 버튼 */}
          <div className='dep_main_buttonleft'>
            {
            [1,2,3].map((a,i)=>{
              return ( 
                <button className={classnames('dep_agebutton', {buttoncolor: color === `${i+1}`})} 
                onClick={()=>{setshow(`${y_ko[i]}`); setcolor(`${i+1}`)
                }}> {y_ko[i]} </button>   
              )})
            }
          </div>
          <div className='dep_main_buttonright'>
            <button className='dep_dateinputbutton' onClick={()=>{
              let location_Aboutme = $('#Aboutme').offset().top - 20
              window.scroll({top: location_Aboutme, behavior:'smooth'});
                }}> 출석입력 </button>   
            <button className='dep_homebutton' onClick={()=>{
                navigate('/')
                }}> home </button> 
          </div>
        </div>

        {/* 3) 출석현황 */}
        <div className='dep_main_presentlist'>
          {/* 날짜 */}
          <div className='dep_main_present_date'>
            <Date></Date>
          </div>
          {/* 출석현황 */}
        {
          [1,2,3,4].map((a1,i1)=>{
            return ( 
            <div className={classnames('dep_main_deptable', {show: show === `${y_ko[i1]}`})}>
              {각y_group(`${y_num[i1]}`).map((a2,i2)=>{
              return ( <Deptable group={각y_group(`${y_num[i1]}`)[i2]} 
                                person={각소그룹person(`${y_num[i1]}`, `${a2}`)}></Deptable>)})}
            </div>
            )})
        }
        </div>

      </div>
      
      {/* 출석기입 */}
      <div className='dep_main_presentInput'>
        {/* 1) 타이틀 */}
        <div className='dep_main_text' id="Aboutme">출석입력하기</div> 
        {/* 2) 날짜선택 */}
        <div className='dep_main_dateselect_wrapper'>
          <div className='dep_main_dateselect_text1'>날짜선택</div>
          <select className='dep_main_dateselect_box' 
            onChange={(e)=>{
              if (e.target.value === '선택') {
              } else {let copy = e.target.value; setdate(copy)
              }}}>
            <option>선택</option>
            {  date_data.map((a,i)=>{return (<option>{date_data[i].date}</option>)})}  
          </select>
          <div className='dep_main_dateselect_text2'>← 날짜를 선택하세요</div>
        </div>
        {/* 3) 현황버튼 */}
        <div className='dep_main_inputstate'>
          <div className='dep_main_inputstate_text1'>[ 날짜:  {date} ]</div>
          <div className='dep_main_inputstate_text2'>입력현황</div>
        </div>
        {/* 4) 출석입력 */}
        <div className='dep_main_dateinputbox'>
        {
          [1,2,3].map((a1,i1)=>{
            return (
              <div className={classnames('dep_main_selectbox', {show: show === `${y_ko[i1]}`})}>
              { 각y_group(`${y_num[i1]}`).map((a2,i2)=>{
                return ( <DateInput date_result={date_result}
                                    group={각y_group(`${y_num[i1]}`)[i2]}  
                                    group_num={각소그룹person_num(`${y_num[i1]}`)[i2]}
                                    person={각소그룹person(`${y_num[i1]}`, `${a2}`)}></DateInput>)})}
              </div> 
            )})
        }
        </div>
        
        {/* 5) 적용버튼 */}
        <div className='dep_main_lastbutton_box'>
          <button className='dep_main_lastbutton'
          onClick={()=>{
            navigate('/')
          }}>확인 & home</button>
        </div>

      </div>

    </div>
  );
}

export default Dep1;