import React, { PropTypes } from 'react';

const ProductListItem = (
	({ product, onClick }) => (
		<div className="panel panel-default">
			<div className="panel-heading">
				Count: <strong>{product.count}</strong>
			</div>
			<div className="panel-body">
				<span className="center-block">{product.name}</span>
			</div>
			<div className="panel-footer">
				{
					product.count <= 0 ?
						<label className="btn-sm text-danger">Out of stock</label> :
						<button className="btn btn-secondary" onClick={() => onClick(product.id)}>Buy</button>

				}
			</div>
		</div>
	)
);

ProductListItem.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired
	}).isRequired,
	onClick: PropTypes.func.isRequired
};

export default ProductListItem;
