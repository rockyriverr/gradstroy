import React, { Fragment, Component } from 'react';
import Menu from '../menu/Menu'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getOrders } from '../../actions/order' 
import { toCart } from '../../actions/cart'


export class Order extends Component {
    static propTypes = {
        orders: PropTypes.array.isRequired
    }
    componentDidMount() {
		this.props.getOrders();
	}
    render() {
        let orders = [];
		const len = this.props.orders.length;
		for (let i = 0; i < len; ++i) {
            let line = [];
            orders.push(
                <tr key={i}>
				    <td>
			            <div> {this.props.orders[i].description}</div>
			        </td>
                    <td>
                        <div> {this.props.orders[i].status}</div>
                    </td>
			    </tr>
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