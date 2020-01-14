 import { GET_PRODUCT } from "../actions/types.js"

 const initialState = {
	products: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_PRODUCT:
			return {
				...state,
				products: action.payload 
			};
		default:
			return state;
	}
}