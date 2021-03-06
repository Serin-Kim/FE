import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Chapter06 from './Chapter06';
import reportWebVitals from './reportWebVitals';
import Greeting from './Chapter07/Greeting';
import LoginControl from './Chapter07/LoginControl';
import AttendanceBook from './Chapter08/AttendanceBook';
import SignUp from './Chapter09/SignUp';
import Calculator from './Chapter10/Calculator';
import UserProfile from './Chapter11/UserProfile';
 
 
ReactDOM.render(
  // <LoginControl />,
  <UserProfile />,
  document.getElementById('root')
);
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
