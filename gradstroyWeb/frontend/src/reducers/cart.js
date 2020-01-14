 import { TO_CART } from "../actions/types.js"
 import { DELETE } from "../actions/types.js"

 const initialState = {
	cart: {}
}

export default function(state = initialState, action) {
	switch(action.type) {
		case TO_CART:
			let curr;
			const num = action.payload;
			if (typeof state.cart[num] !== "undefined") {
				curr = state.cart[num];
			}
			else {
				curr = 0;
			}
			let newCart = state.cart;
			newCart[num] = curr + 1;
			return {
				...state,
				cart: newCart
			};
		case DELETE:
			const num1 = action.payload;
			let newCart1 = state.cart;
			let curr1 = state.cart[num1] - 1;
			if (curr1 === 0) {
				delete newCart1[num1];
			}
			else {
				newCart1[num1] = curr1;
			}
			return {
				...state,
				cart: newCart1
			};
		default:
			return state;
	}
}