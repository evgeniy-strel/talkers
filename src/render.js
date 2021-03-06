import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
            <App state={state} />
          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
      );
};

let ss = () => {
  console.log(5);
}