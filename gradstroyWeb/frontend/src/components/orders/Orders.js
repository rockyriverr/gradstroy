import React, { Fragment, Component } from 'react';
import Menu from '../menu/Menu'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getOrders } from '../../actions/order' 
import { toCart } from '../../actions/cart'


export class Order extends Component {
    componentDidMount() {
		this.props.getOrders();
	}
    render() {
        const pathh = "/orders";
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
                <Menu pathh={pathh}/>
                <div id="wrapp" >
                    <table border="0" align="center" width="76%" height="70%" cellSpacing="10%" cellPadding="10%" id="trash_1" border="1">
                        <caption >Мои заказы</caption>
                        <tbody>
                            <tr>
                                <th>Описание заказа</th>
                                <th>Статус</th>
                            </tr>
                            {orders}
				        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    orders: state.orders.orders
});

export default connect(mapStateToProps, { getOrders })(Order);