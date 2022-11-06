import React from 'react';

import {
  BrowserRouter as Router,
  // Switch는 v5버전이고, 현재는 v6이므로 Routes를 쓴다.
  Routes,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Auth from './hoc/auth'
function App() {
  return (
    <Router>
    <div>

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      {
        /* 이 아래쪽 부분도 Switch대신에 Routes를 쓴다 */
      }
      {
        // path는 URL에 칠 때 localhost:3000/여기에 뭐나올지 정하는거고
        // element={<LandingPage />}에서 LandingPage는 내가 만든 페이지 이름으로, 실제 코드가 작동하는 부분
      }

      
      <Routes>
        <Route exact path="/" element={Auth(LandingPage,null)}/>
        <Route exact path="/login" element={Auth(LoginPage,false)}/>
        <Route exact path="/register" element={Auth(RegisterPage,false)}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;