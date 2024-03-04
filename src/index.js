import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';

const root = ReactDOM.createRoot(document.getElementById('root'));

function FirstComponenet({name, border}){
  return(
    <div>
      <h1 style={
        {
          color:'white',
          backgroundcolor:'blue',
          fontsize:'20px'
        }
      }
      >First Componenet</h1>
      <p> This is first descripition</p>
      <b>{name} OR{ border} </b>
      <img src='https://ichef.bbci.co.uk/news/976/cpsprodpb/15951/production/_117310488_16.jpg.webp'></img>

      </div>
      
    
  );

}
root.render(
  <React.StrictMode>
    <Home/>
    <FirstComponenet name="last wish" border="haha"/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
