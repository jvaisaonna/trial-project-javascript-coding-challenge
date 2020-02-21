export const SELECT_FOOD = "SELECT_FOOD";
export const CANCEL_SELECT_FOOD = "CANCEL_SELECT_FOOD";
export const ADD_FOOD_ORDER = "ADD_FOOD_ORDER";

export const restaurantReducer = (state, action) => {
	switch (action.type) {
		case SELECT_FOOD:
			return { ...state, selectedFood: action.food };
		case CANCEL_SELECT_FOOD:
			return { ...state, selectedFood: {} };
		case ADD_FOOD_ORDER:
			const basket = [...state.basket, action.foodOrder];
			return { ...state, basket, selectedFood: {} };
		default:
			return state;
	}
};
