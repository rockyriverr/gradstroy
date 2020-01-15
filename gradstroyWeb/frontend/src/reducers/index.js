import { combineReducers } from 'redux';
import loader from './loader';
import cart from './cart';
import orders from './orders';
import auth from "./auth";

export default combineReducers({
	loader,
	cart,
	orders,
	auth
});

