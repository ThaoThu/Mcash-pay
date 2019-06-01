
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './redux/reducers';
// import './styles/test.less'

import './scss/app.scss';
import 'bootstrap';
import './less/main.less'

let store = createStore(reducers);
ReactDOM.render(
<Provider store={store}><App /></Provider>,document.getElementById('app')
);