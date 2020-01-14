import { TO_CART } from './types';

 // SEND PRODUCT TO CART

 export const toCart = (num) => dispatch => {
 	dispatch({
 		type: TO_CART,
 		payload: num
 	});
 }