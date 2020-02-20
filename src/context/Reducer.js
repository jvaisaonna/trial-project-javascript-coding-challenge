export const SELECT_FOOD = "SELECT_FOOD";
export const CANCEL_SELECT_FOOD = "CANCEL_SELECT_FOOD";
export const ADD_FOOD = "ADD_FOOD";

export const restaurantReducer = (state, action) => {
	switch (action.type) {
		case SELECT_FOOD:
			return { ...state, selectedFood: action.food };
		case CANCEL_SELECT_FOOD:
			return { ...state, selectedFood: {} };
		case ADD_FOOD:
			const basket = [...state.busket, action.food];
			return { ...state, basket, selectedFood: {} };
		default:
			return state;
	}
};
