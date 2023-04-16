import { React } from 'react';
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import './resv.css';


function Resv(props) {

  let state = useSelector((state) => { return state } )
  let navigate = useNavigate();
 
  return (
    <div className="resv">

      <div className="title">
      신난데이 스텝 예약하기↓
      </div>

      <div className='cover_img'>
        <div className='imgbox'>
          <div className='titlename'>1. 놀이기구</div>
          <div className='img'><img src={`${state.images[0].img}`}></img></div>
          <div className='img'><img src={`${state.images[1].img}`}></img></div>
        </div>
        <div className='imgbox'>
          <div className='titlename'>2. 미션부스</div>
          <div className='missionbox'>
            <div className='missionbox_sub'><img src={`${state.images[2].img}`}></img></div>
            <div className='missionbox_sub'><img src={`${state.images[3].img}`}></img></div>
          </div>
          <div className='missionbox'>
            <div className='missionbox_sub'><img src={`${state.images[4].img}`}></img></div>
            <div className='missionbox_sub'><img src={`${state.images[5].img}`}></img></div>
          </div>
          <div className='missionbox'>
            <div className='missionbox_sub'><img src={`${state.images[6].img}`}></img></div>
            <div className='missionbox_sub'><img src={`${state.images[7].img}`}></img></div>
          </div>
        </div>
      </div>

      <div className="cover_content">
        <div className="title">
        신난데이 스텝 예약하기↓
        </div>
        <div className="box">
          <button onClick={()=>{
            navigate('/resvlist')
          }}>예약하기</button>      
        </div>
      </div>
      

    </div>
  );
}

export default Resv;

