import React from 'react';
import ReactDOM from 'react-dom/client';  
import App from "./App";
import store from "./redux/store";
import { Provider } from 'react-redux';
//Provider is to distribute store to every container components created by connect() within App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

//with react-redux, there is no need to check state changes and re-render components

/*
//render component agian when state is changed.
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
*/
