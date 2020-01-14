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
			const num = action.payload;
			let newCart = state.cart;
			let curr = state.cart[num] - 1;
			if (curr === 0) {
				delete newCart[num];
			}
			else {
				newCart[num] = curr;
			}
			return {
				...state,
				cart: newCart
			};
		default:
			return state;
	}
}