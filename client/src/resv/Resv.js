import { React } from 'react';
import './resv.css';
import { useNavigate } from 'react-router-dom';


function Resv(props) {

  let navigate = useNavigate();
 
  return (
    <div className="resv">

      <div className="cover">

        <div className="box title">
        신난데이 스텝 예약
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

