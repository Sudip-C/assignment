// src/redux/store.js
import {  applyMiddleware, legacy_createStore } from 'redux';
import {thunk} from 'redux-thunk';
import { taskReducer } from './taskSlice';

const store = legacy_createStore(taskReducer, applyMiddleware(thunk));

export default store;
