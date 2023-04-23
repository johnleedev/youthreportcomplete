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
                    if (e.target.value !== '' && !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(e.target.value)) {
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
                    if (e.target.value !== '' && !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(e.target.value)) {
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
              <div className='text'>번호</div>
              <div className='input'>
                <input id='input3'
                  onInput={(e)=>{
                    if (e.target.value !== '' && !/^010-?([0-9]{4})-?([0-9]{4})$/.test(e.target.value)) {
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
              양식이 맞지 않습니다.
          </div>

          <div className='resv_pg_button'>
            <div className='button'>

              <button onClick={()=>{
                if (!/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(부서) || 
                    !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(이름) || 
                    !/^010-?([0-9]{4})-?([0-9]{4})$/.test(번호)
                ){
                  alert('양식에 맞게 입력해주세요')
                } else {
                  axios.post('/reserveadd', {
                    id : props.id,
                    place : props.자리,
                    dep : 부서,
                    name : 이름,
                    phone : 번호
                  }).then((결과)=>{
                    alert(결과.data);
                  }).catch(()=>{console.log('실패함')});
  
                  $('#input1').val('')
                  $('#input2').val('')
                  $('#input3').val('')
                }

                
                
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