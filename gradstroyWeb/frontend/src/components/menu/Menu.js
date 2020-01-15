import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeOrder } from '../../actions/order' 

export class Menu extends Component {
	createOrder = (e) => {
		const cart = this.props.cart;
		const products = this.props.products;
		let orderDescr = "";
		for (var key in cart) {
			orderDescr += products[key].name + " (" + cart[key].toString(10) + " шт.)  ";
		}
		this.props.makeOrder({description: orderDescr, status: "Ожидает подтверждения"});
	}
	render() {
		let retmenu;
		switch(this.props.pathh) {
			case "/": 
				retmenu = (
					<tbody>
		                <tr>
		                    <td><button>Войдите</button></td>
		                </tr>
		                <tr>
		                    <td>
		                        <Link to="/cart">
		                        	<button>Корзина</button>
		                        </Link>
		                    </td>
		                </tr>
		                <tr>
		                    <td>
								<Link to="/orders">
									<button>Заказы </button>
								</Link>
							</td>
		                </tr>
		            </tbody>
				)
				break;
			case "/cart": 
				retmenu = (
					<tbody>
		                <tr>
		                    <td><button>Оформить заказ</button></td>
		                </tr>
		                <tr>
		                    <td>
		                        <Link to="/orders">
		                        	<button>Мои заказы</button>
		                        </Link>
		                    </td>
		                </tr>
		                <tr>
		                    <td>
								<Link to="/">
									<button>Каталог</button>
								</Link>
							</td>
		                </tr>
		                 <tr>
		                    <td>
								<Link to="/">
									<button>Выйти</button>
								</Link>
							</td>
		                </tr>
		            </tbody>
				)
				break;
			case "/orders":
				retmenu = (
					<tbody>
						<tr>
		                    <td>
		                        <Link to="/cart">
		                        	<button>Корзина</button>
		                        </Link>
		                    </td>
		                </tr>
		                <tr>
		                    <td>
								<Link to="/">
									<button>Каталог</button>
								</Link>
							</td>
		                </tr>
		                <tr>
		                    <td>
								<Link to="/">
									<button>Выйти</button>
								</Link>
							</td>
		                </tr>
		            </tbody>
				)
				break;
			
		}
		return (
			<div className="wrapper">
            	<div className="content">
	                <table border="0" align="left" width="20%" height="70%" cellSpacing="10%" cellPadding="10%">
	                	<caption>
		                        ГрадСтрой
		                        <img src="../../../static/img/logotip.png" width="50%" alt="right" />
		                </caption>
	                	{retmenu}
	                </table>
             	</div>
        	</div>
		)
	}
}

const mapStateToProps = state => ({
	products: state.loader.products,
	cart: state.cart.cart
});

export default connect(mapStateToProps, { makeOrder })(Menu);




