import { React, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import axios from 'axios'
import './resvpage.css';
import $ from 'jquery';

function ResvPage(props) {

  let navigate = useNavigate();

  let [부서, set부서] = useState('')
  let [이름, set이름] = useState('')
  let [번호, set번호] = useState('')

  let [show1, setshow1] = useState('')
  let [show2, setshow2] = useState('')
  let [show3, setshow3] = useState('')


 
  return (
      <div className='resv_pg'>
        <div className='resv_pg_cover'>
          <div className='resv_pg_box title'>
            예약하기
          </div>
          <div className='resv_pg_box dep'>
            <div className='resv_pg_sub top'>
              <div className='text'>부서</div>
              <div className='input'>
                <input id='input1'
                  onInput={(e)=>{
                    if (!/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(e.target.value)) {
                      setshow1('show')
                    } else {
                      setshow1('')
                    }  
                    set부서(e.target.value)
                }}></input>
              </div>
            </div>
          </div>
          <div className={classnames('resv_pg_box arlam', {show1})}>
             한글로 입력해주세요
          </div>
          <div className='resv_pg_box dep name'>
            <div className='resv_pg_sub top'>
              <div className='text'>이름</div>
              <div className='input'>
                <input id='input2'
                  onInput={(e)=>{
                    if (!/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(e.target.value)) {
                      setshow2('show')
                    } else {
                      setshow2('')
                    } 
                  set이름(e.target.value)
                }}></input>
              </div>
            </div>
          </div>
          <div className={classnames('resv_pg_box arlam', {show2})}>
            한글로 입력해주세요
          </div>
          <div className='resv_pg_box dep phone'>
            <div className='resv_pg_sub top'>
              <div className='text'>폰번호</div>
              <div className='input'>
                <input id='input3'
                  onInput={(e)=>{
                    if (!/^\d{3}-\d{3,4}-\d{4}$/.test(e.target.value)) {
                      setshow3('show')
                    } else {
                      setshow3('')
                    } 
                  set번호(e.target.value)
                }}></input>
              </div>
            </div>
          </div>
          <div className={classnames('resv_pg_box arlam', {show3})}>
              010-0000-0000 양식에 맞게 입력해주세요
          </div>

          <div className='resv_pg_button'>
            <div className='button'>

              <button onClick={()=>{
                if (부서 === '' || 이름 === '' || 번호 === '' || 부서 === null || 이름 === null || 번호 === null ) {
                  alert ("빈칸을 입력해주세요")
                  return
                } 
                if (부서 !== '' || 이름 !== '' || 번호 !== '' || 부서 !== null || 이름 !== null || 번호 !== null ) {
                axios.post('/reserveadd', {
                  id : props.id,
                  place : props.자리,
                  dep : 부서,
                  name : 이름,
                  phone : 번호
                })
                .then((res)=>{
                  alert(res.data);
                })
                .catch(()=>{console.log('실패함')})
                } else {
                  return
                }
                

                $('#input1').val('')
                $('#input2').val('')
                $('#input3').val('')

                navigate('/resv')

              }}>입력하기</button>

            </div>

            <div className='button'>

              <button onClick={()=>{

               navigate('/resv')

              }}>돌아가기</button>
              
            </div>
          </div>
        </div>

      </div>
  );
}

export default ResvPage;