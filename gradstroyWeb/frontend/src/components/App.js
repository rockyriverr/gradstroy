import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import css from '../../static/style.css';
import { HashRouter as Router, Route, Switch, Redirrect } from 'react-router-dom'

import Menu from './menu/Menu';
import Cart from './cart/Cart';
import Catalog from './catalog/Catalog';
import Order from './orders/Orders'

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path="/" component={Catalog} />
						<Route exact path="/cart" component={Cart} />
						<Route exact path="/orders" component={Order}/>
					</Switch>
				</Router>
			</Provider> 
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));