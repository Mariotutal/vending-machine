import React from 'react';
import ProductList from './ProductList';
import Sidebar from './Sidebar';

const App = (
	() => (
		<section className="container">
			<div className="page-header text-center">
				<h1>Vending Machine</h1>
			</div>
			<div className="col-xs-5 col-sm-3">
				<Sidebar />
			</div>
			<div className="col-xs-7 col-sm-9">
				<ProductList />
			</div>

		</section>
	)
);

export default App;
