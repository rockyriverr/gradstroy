import { TO_CART } from './types';
import { DELETE } from './types';

 // SEND PRODUCT TO CART

 export const toCart = (num) => dispatch => {
 	dispatch({
 		type: TO_CART,
 		payload: num
 	});
 }

// DELETE PRODUCT FROM CARD

  export const delete = (num) => dispatch => {
 	dispatch({
 		type: DELETE,
 		payload: num
 	});
 }