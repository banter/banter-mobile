import allReducers from './store/reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
