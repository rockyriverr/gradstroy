import { combineReducers } from 'redux';
import loader from './loader';
import cart from './cart';
import orders from './orders';

export default combineReducers({
	loader,
	cart,
	orders
});

