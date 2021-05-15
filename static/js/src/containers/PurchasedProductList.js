import React, { PropTypes } from 'react';
import PurchasedProductListItem from '../components/PurchasedProductListItem';
import { connect } from 'react-redux';
import map from 'lodash/map';

const ProductList = (
	({ products }) => (
		<section className="row">
			{map(products, (product, index) => (
				<div key={index} className="col-xs-12 text-center">
					<PurchasedProductListItem product={product} />
				</div>
			))}
		</section>
	)
);

ProductList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired
	}).isRequired)
};

const mapStateToProps = state => ({
	products: state.purchasedProducts.map(id => state.products.data[id])
});

const mapDispatchToProps = () => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList);
