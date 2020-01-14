import { combineReducers } from 'redux';
import loader from './loader'
import cart from './cart'

export default combineReducers({
	loader,
	cart
});

