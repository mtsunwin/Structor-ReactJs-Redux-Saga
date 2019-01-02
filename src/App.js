import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import root from './sagas';
import myReducer from "./reducers/index";
import Test from './components/Test'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(myReducer, applyMiddleware(sagaMiddleware))
// const store = createStore(myReducer)
sagaMiddleware.run(root)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Test></Test>
        </div>
      </Provider>
    );
  }
}

export default App;
