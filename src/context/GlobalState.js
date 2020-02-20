import React, { useReducer } from "react";

import { FOOD_LIST } from "../Global";
import RestaurantContext from "./RestaurantContext";
import {
	restaurantReducer,
	ADD_FOOD,
	SELECT_FOOD,
	CANCEL_SELECT_FOOD
} from "./Reducer";

const GlobalState = props => {
	const foods = [...FOOD_LIST];
	const [restaurantState, dispatch] = useReducer(restaurantReducer, {
		selectedFood: {},
		basket: []
	});

	const selectingFood = food => {
		dispatch({ type: SELECT_FOOD, food: food });
	};

	const cancelSelectFood = () => {
		dispatch({ type: CANCEL_SELECT_FOOD });
	};

	const addFoodToBasket = food => {
		dispatch({ type: ADD_FOOD, food: food });
	};

	return (
		<RestaurantContext.Provider
			value={{
				foods,
				basket: restaurantState.basket,
				selectedFood: restaurantState.selectedFood,
				addFoodToBasket: addFoodToBasket,
				selectingFood: selectingFood,
				cancelSelectFood: cancelSelectFood
			}}
		>
			{props.children}
		</RestaurantContext.Provider>
	);
};

export default GlobalState;
