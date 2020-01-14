import React, { Fragment, Component } from 'react';
import Menu from '../menu/Menu'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getProducts } from '../../actions/loader' 
import { toCart } from '../../actions/cart' 

export class Catalog extends Component {

	static propTypes = {
		products: PropTypes.array.isRequired
	}

	componentDidMount() {
		this.props.getProducts();
	}

	render() {
		let products = [];
		const len = this.props.products.length;
		for (let i = 0; i < Math.floor(len/3); ++i) {
			let line = [];
			for (let j = 0; j < 3; ++j) {
				line.push(
					<td key={i*3+j} onClick={this.props.toCart.bind(this, i*3+j)}>
				        <div className="holder">
				            <img src={this.props.products[i*3+j].img} alt="Masterflow" width="90%" />
				            <div className = "block"> {this.props.products[i*3+j].description}</div>
				        </div>
				    </td>
				)
			}
			products.push(
				<tr key={i}>{line}</tr>
			)
		}
		let last = []
		for (let i = 0; i < len%3; ++i) {
			last.push(
				<td>
				    <div className="holder">
				        <img src={this.props.products[len-len%3+i].img} alt="Masterflow" width="90%" />
				        <div className = "block"> {this.props.products[len-len%3+i].description}</div>
				    </div>
				</td>
			)

		}
		return (
			<div style={{display: "flex"}}>
				<Menu />
					<table border="0" align="right" width="60%" height="90%" cellSpacing="10%" cellPadding="0" bgcolor="white" id="bigtable" border="1">
			            <caption>Каталог товаров</caption>
			            <tbody>
				            {products}
				        </tbody>
			        </table>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	products: state.loader.products
});

export default connect(mapStateToProps, { getProducts, toCart })(Catalog);