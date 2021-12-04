import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import configureStore from './store/configureStore'

import { Provider } from 'react-redux';


const store = configureStore()
// console.log(store)

console.log('state', store.getState())

store.subscribe(() => {
  console.log('state updated', store.getState())
})



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root'))
