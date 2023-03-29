import { React, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './resvpage.css';
import $ from 'jquery';

function ResvPage(props) {

  let navigate = useNavigate();

  let [부서, set부서] = useState('')
  let [이름, set이름] = useState('')
  let [번호, set번호] = useState('')


 
  return (
      <div className='resv_pg'>
        <div className='resv_pg_cover'>
          <div className='resv_pg_box title'>
            신상 입력하기
          </div>
          <div className='resv_pg_box dep'>
            <div className='resv_pg_textbox text'>부서</div>
            <div className='resv_pg_textbox input'>
              <input id='input1'
                onInput={(e)=>{
                set부서(e.target.value)
              }}></input>
            </div>
          </div>
          <div className='resv_pg_box name'>
            <div className='resv_pg_textbox text'>이름</div>
            <div className='resv_pg_textbox input'>
              <input id='input2'
                onInput={(e)=>{
                set이름(e.target.value)
              }}></input>
            </div>
          </div>
          <div className='resv_pg_box phone'>
            <div className='resv_pg_textbox text'>번호</div>
            <div className='resv_pg_textbox input'>
              <input id='input3'
                onInput={(e)=>{
                set번호(e.target.value)
              }}></input>
            </div>
          </div>
          <div className='resv_pg_box result'>
            <div className='resv_pg_textbox input'>

              <button onClick={()=>{

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
                
              }}>입력하기</button>

            </div>

            <div className='resv_pg_textbox input'>

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