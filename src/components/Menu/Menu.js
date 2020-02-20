import React, { useContext } from "react";
import "./Menu.css";
import RestaurantContext from "../../context/RestaurantContext";

import Item from "./Item/Item";

function Menu() {
	const restaurant = useContext(RestaurantContext);
	const foods = restaurant.foods;

	return (
		<div className='Menu'>
			{foods.map((food, index) => (
				<Item
					key={index}
					{...food}
					selectingFood={restaurant.selectingFood}
				/>
			))}
		</div>
	);
}

export default Menu;
