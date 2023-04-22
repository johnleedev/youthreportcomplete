import { React } from 'react';
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import './resv.css';
import poster from './poster.png'


function Resv(props) {

  let state = useSelector((state) => { return state } )
  let navigate = useNavigate();
 
  return (
    <div className="resv">

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

      <div className='cover_img'>
        <div className='imgbox'>
          <div className='titlename'>신난데이 스텝예약 안내</div>
          <div className='notice'>
          샬롬^^ 반야월교회 모든 주일학교 선생님과 학부모님의 삶 속에 하나님의 평안이 가득하길 기도합니다.
          <br></br><br></br>저희 주일학교에서 어린이날을 맞이하여 놀이기구와 체험부스, 먹거리를 함께 즐길 수 있는 “신난데이" 행사(5월7일)를 준비하고 있습니다
          <br></br><br></br>특별히 이 행사를 위해 섬김의 손길이 필요합니다. 선생님들과 학부모님들의 많은 관심과 섬김으로 더욱 풍성하고 아름다운 행사가 되길 소망합니다.
          <br></br><br></br>하나님이 기뻐하시고 아이들이 행복할 수 있는 신난데이가 될 수 있도록 섬김과 기도 부탁드립니다. 감사합니다!
          </div>
        </div>
        <div className='imgbox'>
          <img src={poster}></img>
        </div>
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

