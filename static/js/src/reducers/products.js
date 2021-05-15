import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_DONE,
	BUY_PRODUCT,
	BUY_PRODUCT_DONE
} from '../constants/ActionTypes';
import keyBy from 'lodash/keyBy';

const initialState = {
	loading: false,
	data: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return {
				...state,
				loading: true
			};
		case FETCH_PRODUCTS_DONE:
			return {
				...state,
				loading: false,
				data: keyBy(action.payload.data.map(product => (
					{
						...product,
						loading: false
					}
				)), 'id')
			};
		case BUY_PRODUCT:
			return {
				...state,
				data: {
					...state.data,
					[action.payload]: {
						...state.data[action.payload],
						loading: true
					}
				}
			};
		case BUY_PRODUCT_DONE:
			return {
				...state,
				data: {
					...state.data,
					[action.payload]: {
						...state.data[action.payload],
						loading: false,
						count: state.data[action.payload].count - 1
					}
				}
			};
		default:
			return state;
	}
};

export default reducer;
