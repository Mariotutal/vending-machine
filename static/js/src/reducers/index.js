import { combineReducers } from 'redux';
import products from './products';
import purchasedProducts from './purchasedProducts';

const rootReducer = combineReducers({
	products,
	purchasedProducts
});

export default rootReducer;
