import axios from 'axios';

import { GET_ORDER } from './types';
import { MAKE_ORDER } from './types';

 // GET ORDER

export const getOrders = () => dispatch => {
 	axios.get('/api/orders')
 		.then(res => {
 			dispatch({
 				type: GET_ORDER,
 				payload: res.data
 			});
 		}).catch(err => console.log(err));
 }

// MAKE ORDER

export const makeOrder = (myOrder) => dispatch => {
 	axios.post('/api/orders', myOrder)
 		.then(res => {
 			dispatch({
 				type: MAKE_ORDER,
 				payload: res.data
 			});
 		}).catch(err => console.log(err));
 }