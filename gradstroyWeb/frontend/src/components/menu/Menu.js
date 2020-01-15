import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeOrder } from '../../actions/order'; 
import { logout } from '../../actions/auth';

export class Menu extends Component {
	createOrder = (e) => {
		const cart = this.props.cart;
		const products = this.props.products;
		let orderDescr = "";
		let sum = 0;
		for (var key in cart) {
			orderDescr += products[key].name + " (" + cart[key].toString(10) + " шт.) ";
			sum += products[key].price*cart[key];
		}
		if (orderDescr !== "") {
			orderDescr += "Сумма: " + sum.toString(10) + "р.";
			this.props.makeOrder(JSON.stringify({description: orderDescr, status: "Ожидает подтверждения"}));
		}
	}
	render() {
		let retmenu;
		switch(this.props.pathh) {
			case "/": 
				retmenu = (
					<tbody>
		                <tr>
		                    <td>
		                    	<Link to="/login">
		                    		<button>Войдите</button>
		                    	</Link>
		                    </td>
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
									<button>Мои заказы </button>
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
		                    <td>
		                    	{this.props.islogin ? (<button onClick={this.createOrder}>Оформить заказ</button>)
		                    		: (<Link to="/login"><button>Оформить заказ</button></Link>)
		                    	}
		                    </td>
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
								<button onClick={this.props.logout}>Выйти</button>
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
								<button onClick={this.props.logout}>Выйти</button>
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
	cart: state.cart.cart,
	islogin: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { makeOrder, logout })(Menu);




