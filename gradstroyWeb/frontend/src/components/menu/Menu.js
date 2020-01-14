import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Menu extends Component {
	render() {
		return (
			<div className="wrapper">
            	<div className="content">
	                <table border="0" align="left" width="20%" height="70%" cellSpacing="10%" cellPadding="10%">
	                	<caption>
		                        ГрадСтрой
		                        <img src="../../../static/img/logotip.png" width="50%" alt="right" />
		                </caption>
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
		                        <td><button>Заказы </button></td>
		                    </tr>
		                </tbody>
	                </table>
             	</div>
        	</div>
		)
	}
}

export default Menu;