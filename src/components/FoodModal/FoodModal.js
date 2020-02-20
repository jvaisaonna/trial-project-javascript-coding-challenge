import React, { useContext } from "react";
import "./FoodModal.css";
import restaurantContext from "../../context/RestaurantContext";

function FoodModal() {
	const restaurant = useContext(restaurantContext);
	const food = restaurant.selectedFood;

	return (
		<div>
			{JSON.stringify(restaurant.selectedFood) !== JSON.stringify({}) ? (
				<div className='FoodModal'>
					<div className='Food-selection-container'>
						<img alt='' />
						<h3>{food.name}</h3>
						<p>{food.description}</p>
						<div>
							<button
								onClick={() => restaurant.cancelSelectFood()}
							>
								Cancel
							</button>
							<button>Add to Order</button>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default FoodModal;
