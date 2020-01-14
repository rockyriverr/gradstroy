import { GET_ORDER } from "../actions/types.js"

const initialState = {
   orders: []
}

export default function(state = initialState, action) {
   switch(action.type) {
       case GET_ORDER:
           return {
               ...state,
               orders: action.payload 
           };
       default:
           return state;
   }
}