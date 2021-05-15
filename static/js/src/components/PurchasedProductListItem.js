import React, { PropTypes } from 'react';

const PurchasedProductListItem = (
	({ product }) => (
		<div className="panel panel-default">
			<div className="panel-body">
				<span className="center-block">{product.name}</span>
			</div>
		</div>
	)
);

PurchasedProductListItem.propTypes = {
	product: PropTypes.shape({
		name: PropTypes.string.isRequired
	}).isRequired
};

export default PurchasedProductListItem;
