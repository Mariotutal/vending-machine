import React from 'react';
import PurchasedProductList from './PurchasedProductList';

const Sidebar = (
	() => (
		<section className="sidebar">
			<h2>Queue</h2>
			<PurchasedProductList />
		</section>
	)
);

export default Sidebar;
