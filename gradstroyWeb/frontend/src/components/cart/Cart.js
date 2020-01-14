import React, { Fragment, Component } from 'react';
import Menu from '../menu/Menu'

export class Cart extends Component {
	render() {
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
						<tr>
							<td>
								<img src="../../../static/img/тв7.jpg" alt="тв7" width="90%" />
							</td>
							<td>ТВ7</td>
							<td>1350 р.</td>
							<td>1 шт.</td>
							<td><button>Удалить</button></td>
						</tr>
						<tr>
							<td>
								<img src="../../../static/img/tmk.n120n.png" alt="Masterflow" width="90%" />
							</td>
							<td>Мастерфлоу</td>
							<td>2500 р.</td>
							<td>5 шт.</td>
							<td><button>Удалить</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default Cart;