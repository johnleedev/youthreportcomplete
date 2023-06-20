/*eslint-disable*/
import './Reset.css';
import './dep/css/main.css';
import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './dep/Main';
import Dep from './dep/Dep';
import NameAdd from './depcommon/NameAdd';
import GroupAdd from './depcommon/GroupAdd';
import Login from './depcommon/Login';
import Report from './report/Report';

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={
          <div className='App_main'>
          <div className='maintitle'>주일학교 출석 관리</div>
          </div>
        }/>
        <Route path="/main" element={<Main></Main>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/dep/*" element={<Dep></Dep>}/>
        <Route path="/nameadd" element={<NameAdd></NameAdd>}/>
        <Route path="/groupadd" element={<GroupAdd></GroupAdd>}/>
        <Route path="/lastreport/*" element={<Report></Report>}/>
      </Routes>
     
    </div>
    
  );

}


export default App;

