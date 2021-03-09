import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListContext from './providers/list-provider'

const items = [{id: 1, title: 'first'}];

ReactDOM.render(
  <React.StrictMode>
    <ListContext.Provider value={{items}}>
      <App />
    </ListContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
