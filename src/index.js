import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import authReducer from "./store/reducers/auth";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
  apiKey: "AIzaSyAHRO1tIGChPIMIAIe3vcflB3lcOy20bbU",
  authDomain: "messenger-bf9d8.firebaseapp.com",
  projectId: "messenger-bf9d8",
  storageBucket: "messenger-bf9d8.appspot.com",
  messagingSenderId: "1087844773455",
  appId: "1:1087844773455:web:c183af654397c19139043a",
  measurementId: "G-D6XHJ6C3YN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  auth: authReducer
})
const store = createStore(reducer, composeEnhances(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
