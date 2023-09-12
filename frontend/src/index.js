//import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// import  {store} from './app/store'
// import { Provider} from 'react-redux'
// //import ReactDOM from 'react-dom';
// //import * as serviceWorker from './serviceWorker';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>
//   </React.StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import { store } from './app/store';
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware, compose} from 'redux';
//import * as serviceWorker from './serviceWorker';
//import thunk from ' redux-thunk';

//import reducers from './reducers';

//const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);