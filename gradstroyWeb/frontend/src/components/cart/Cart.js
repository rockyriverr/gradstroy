import React, { Fragment, Component } from 'react';
import Menu from '../menu/Menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delete } from '../../actions/cart'  

export class Cart extends Component {
	render() {
		let mystore = [];
		const cart = this.props.cart;
		for (var key in cart) {
			mystore.push(
				<tr key={key}>
					<td>
						<img src={this.props.products[key].img} alt="img" width="90%" />
					</td>
					<td>{this.props.products[key].name}</td>
					<td>{this.props.products[key].price} р.</td>
					<td>{cart[key]} шт.</td>
					<td><button onClick={this.props.delete.bind(this, key)}>Удалить</button></td>
				</tr>
			)
		}
		return (
			<div style={{display: "flex"}}>
				<Menu />
				<table border="0" align="center" width="76%" height="70%" cellSpacing="10%" cellPadding="10%" id="trash" border="1">
					<caption>Корзина</caption>
					<tbody>
						<tr>
			            	<th>Изображение товара</th>
			            	<th>Название</th>
			            	<th>Цена за шт.</th>
			            	<th>Количество</th>
			            	<th>Удалить товар из корзины</th>
			        	</tr>
						{mystore}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	products: state.loader.products,
	cart: state.cart.cart
});

export default connect(mapStateToProps)(Cart);