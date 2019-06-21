import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: "History, how are you?", likesCount: 2 },
  { id: 2, message: "It's my first post", likesCount: 5 },
];

let dialogs = [
  { id: 1, name: "Vika" },
  { id: 2, name: "Dimych" },
  { id: 3, name: "Andrey" },
  { id: 4, name: "Sveta" },
  { id: 5, name: "Sacha" },
  { id: 6, name: "Viktor" },
];

let messages = [
  { id: 1, message: "Vika" },
  { id: 2, message: "How is your deals?" },
  { id: 3, message: "Yo!" },
  { id: 4, message: "Vika" },
  { id: 5, message: "Vika" },
  { id: 6, message: "Vika" },
];


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
