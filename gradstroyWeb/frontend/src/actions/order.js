import axios from 'axios';

import { GET_ORDER } from './types';

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