/*eslint-disable*/
import './css/main.css';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"

function Main() {

    let state = useSelector((state) => { return state } )
    let navigate = useNavigate();
  
    return (
        <div>
          <div className='App_main'>
            <div className='maintitle'>주일학교 출석 관리</div>
            <div className='dep_box'>
              { state.부서info.map((a, i)=>{
                  return (
                    <div key={i} className='dep_list' onClick={()=>{
                      navigate(`/dep/?dep=${i+1}`)
                      console.log('depNumber', i+1)
                    }}><p>{ state.부서info[i].dep}</p></div>           
                  )
                })}
            </div>
            <div className='dep_buttonbox1'>
              <button className='link_lastreport' onClick={()=>{
              navigate('/lastreport')
              }}> 주일학교 보고서 작성하기 </button>
            </div>
            <div className='dep_buttonbox2'>
              <button className='link_login' onClick={()=>{
              navigate('/login')
              }}> 관리자 </button>  
              <button className='link_login' onClick={()=>{
              navigate('/lastreport/LastResult')
              }}> 전체통계 </button>  
            </div>

          </div>

        </div>
    );
}

export default Main;