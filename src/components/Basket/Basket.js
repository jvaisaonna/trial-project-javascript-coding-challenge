import React, { useContext } from "react";
import restaurantContext from "../../context/RestaurantContext";
import "./Basket.css";

function Basket() {
	const restaurant = useContext(restaurantContext);
	const basket = restaurant.basket;

	return (
		<div className='Basket'>
			<h1>Your Basket</h1>
			<div className='Basket-content'>
				{basket.length === 0 ? (
					<div>Your basket is empty...</div>
				) : null}
			</div>

			<button className='Basket-checkout' disabled={basket.length === 0}>
				Checkout
			</button>
		</div>
	);
}

export default Basket;
