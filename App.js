
import React, { Component } from 'react';
import Router from './src/Router';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './src/reducers/rootReducer';
import ReduxThunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/es/integration/react';

export default class App extends Component{
  render(){
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))
    const persisStore = persistStore(store)
    return(
      <Provider store={store}>
       <PersistGate persistor={persisStore}>
        <Router/>
        </PersistGate>
      </Provider>
    )
  }
}