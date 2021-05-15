import {
	BUY_PRODUCT_DONE
} from '../constants/ActionTypes';

const initialState = [
];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_PRODUCT_DONE:
			return [...state,
			action.payload
			];
		default:
			return state;
	}
};

export default reducer;
