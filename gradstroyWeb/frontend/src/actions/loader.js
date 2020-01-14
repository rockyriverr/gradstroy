import axios from 'axios';

import { GET_PRODUCT } from './types';

 // GET PRODUCT

 export const getProducts = () => dispatch => {
 	axios.get('/api/catalog')
 		.then(res => {
 			dispatch({
 				type: GET_PRODUCT,
 				payload: res.data
 			});
 		}).catch(err => console.log(err));
 }