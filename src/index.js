import React from 'react';
import ReactDOM from 'react-dom/client';  
import App from "./App";
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

//render component agian when state is changed.
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})

