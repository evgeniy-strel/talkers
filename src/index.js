import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let posts = [
  {message: "Это мой первый пост! Это мой первый пост! Это мой первый пост! Это мой первый пост! Это мой первый пост! Это мой первый пост! Это мой первый пост! Это мой первый пост!", countLikes: 5},
  {message: "Это мой второй пост! Это мой второй пост! Это мой второй пост! Это мой второй пост!", countLikes: 6},
  {message: "Это мой третий пост!", countLikes: 3},
  {message: "Это мой четвертый пост!", countLikes: 4}
];


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
