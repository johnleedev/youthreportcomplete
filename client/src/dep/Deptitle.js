/*eslint-disable*/
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';

function Deptitle(props) {
  
  const navigate = useNavigate();
  const dep_year = props.dep_year  

  return (
    <div className='dep_main_buttonbox'>
      <div className='dep_main_buttonleft'>
        {dep_year.map((a, i) => (
          <button
            key={i}
            className={classnames('dep_agebutton', { buttoncolor: props.buttonColor === `${i + 1}` })}
            onClick={() => {
              props.setButtonColor(`${i + 1}`);
              props.select_data(i)
              props.set_year_num(i+1)
            }}
          >
            {dep_year[i]}
          </button>
        ))}
      </div>
      <div className='dep_main_buttonright'>
        <button className='dep_homebutton' onClick={() => navigate('/main')}>
          Home
        </button>
      </div> 
    </div>
  );
}

export default Deptitle;
