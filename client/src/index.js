import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';
import { fetchReceipts } from './actions';
import store from './store';
import App from './components/App';
// import reducers from './reducers';

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
store.dispatch(fetchReceipts);

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.querySelector('#root')
);
