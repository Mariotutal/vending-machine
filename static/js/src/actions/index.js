import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_DONE,
	BUY_PRODUCT,
	BUY_PRODUCT_DONE
} from '../constants/ActionTypes';
import axios from 'axios';

export const fetchProducts = () => dispatch => {
	dispatch({
		type: FETCH_PRODUCTS
	});

	axios.get('api/products.json').then(products => {
		// add timeout to simulate the loading of the static products
		setTimeout(() => {
			dispatch({
				type: FETCH_PRODUCTS_DONE,
				payload: products
			});
		}, 1000);
	});
};


export const buyProduct = id => (dispatch) => {
	dispatch({
		type: BUY_PRODUCT,
		payload: id
	});

	// Added timeout to see the loading
	setTimeout(() => {
		dispatch({
			type: BUY_PRODUCT_DONE,
			payload: id
		});
	}, Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000);

};
