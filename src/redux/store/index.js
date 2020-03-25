// @flow
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk'

import { rootReducer } from '../reducers'

const client = axios.create({
    responseType: 'json'
});

export const store = createStore(rootReducer, applyMiddleware(thunk, axiosMiddleware(client)));