import React, { Fragment, Component } from 'react';
import Menu from '../menu/Menu'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getOrders } from '../../actions/order' 
import { toCart } from '../../actions/cart'


export class Order extends Component {
    static propTypes = {
        products: PropTypes.array.isRequired
    }
    componentDidMount() {
		this.props.getOrders();
	}
    render() {
        let orders = [];
		const len = this.props.orders.length;
		for (let i = 0; i < Math.floor(len/2); ++i) {
			let line = [];
			line.push(
				<td key={i*2}>
			            <div> {this.props.orders[i*2].description}</div>
			    </td>
            )
            line.push(
                <td key={i*2+1}>
                    <div> {this.props.orders[i*2+1].status}</div>
                </td>
            )
			orders.push(
				<tr key={i}>{line}</tr>
			)
		}
        return (
            <div style={{display: "flex"}}>
                <Menu />
                <div id="wrapp" >
                    <table border="0" align="center" width="76%" height="70%" cellspacing="10%" cellpadding="10%" id="trash_1" border="1">
                        <caption >Мои заказы</caption>
                        <tr>
                            <th>Описание заказа</th>
                            <th>Статус</th>
                        </tr>
                        <tbody>
				            {orders}
				        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Order;