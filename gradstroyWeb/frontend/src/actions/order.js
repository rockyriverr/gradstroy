import axios from 'axios';

import { GET_ORDER } from './types';
import { MAKE_ORDER } from './types';
import { tokenConfig } from './auth';

 // GET ORDER

export const getOrders = () => (dispatch, getState) => {
 	axios.get('/api/orders', tokenConfig(getState))
 		.then(res => {
 			dispatch({
 				type: GET_ORDER,
 				payload: res.data
 			});
 		}).catch(err => console.log(err));
 }

// MAKE ORDER

export const makeOrder = (myOrder) => (dispatch, getState) => {
 	axios.post('/api/orders', myOrder, tokenConfig(getState))
 		.then(res => {
 			dispatch({
 				type: MAKE_ORDER,
 				payload: res.data
 			});
 		}).catch(err => console.log(err));
 }