import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <div className="board">
        <div className="cell" id='0'></div>
        <div className="cell" id='1'></div>
        <div className="cell" id='2'></div>
        <div className="cell" id='3'></div>
        <div className="cell" id='4'></div>
        <div className="cell" id='5'></div>
        <div className="cell" id='6'></div>
        <div className="cell" id='7'></div>
        <div className="cell" id='8'></div>
      </div>
    </div>,
    <App />
);