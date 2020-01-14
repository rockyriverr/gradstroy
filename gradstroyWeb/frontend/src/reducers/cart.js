 import { TO_CART } from "../actions/types.js"

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
		default:
			return state;
	}
}