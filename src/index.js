import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootreducers from './reducer/index';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Login from "./component/login/Login";
import Signup from "./component/login/Signup"
import Main from './component/main/Index'
import history from './history';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Provider store={createStore(rootreducers)}>
<BrowserRouter history={history}>
      <div>
  
      <Routes>
 
  
         <Route path="/" element={<Login/>} />
       
 
         <Route path="/main" element={<Main/>} />
  
  <Route path="/signup" element={<Signup/>}   />

       
        </Routes>
       
      </div>
    </BrowserRouter>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

