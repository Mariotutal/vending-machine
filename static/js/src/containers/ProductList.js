import React, { PropTypes } from 'react';
import ProductListItem from '../components/ProductListItem';
import { connect } from 'react-redux';
import map from 'lodash/map';
import { buyProduct } from '../actions';

const ProductList = (
	({ products, onProductClick }) => (
		<section className="row">
			{
				products.loading ?
					<span>Loading products</span> :
					map(products.data, product => (
						<div key={product.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
							<ProductListItem product={product} onClick={onProductClick} />
						</div>
					))
			}
		</section>
	)
);

ProductList.propTypes = {
	products: PropTypes.shape({
		loading: PropTypes.bool.isRequired,
		data: PropTypes.object.isRequired
	}).isRequired,
	onProductClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	products: state.products,

});

const mapDispatchToProps = dispatch => ({
	onProductClick: id => dispatch(buyProduct(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList);
