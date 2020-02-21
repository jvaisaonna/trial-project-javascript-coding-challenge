import React, { useContext } from "react";
import restaurantContext from "../../context/RestaurantContext";
import "./Basket.css";

function Basket() {
	const restaurant = useContext(restaurantContext);
	const basket = restaurant.basket;

	const basketItem = basket.map((item, index) => {
		return (
			<div key={"b" + index} className='Basket-item'>
				{item.quantity} x {item.name} HK${item.price}
				<br />({item.selectedOption})
			</div>
		);
	});

	basketItem.push(
		<div key={basketItem.length} className='Basket-total-price'>
			Total: HK$
			{basket.reduce(
				(accumulator, currentValue) =>
					accumulator + currentValue.price * currentValue.quantity,
				0
			)}
		</div>
	);

	return (
		<div className='Basket'>
			<h1>Your Basket</h1>
			<div className='Basket-content'>
				{basket.length === 0 ? (
					<div>Your basket is empty...</div>
				) : (
					basketItem
				)}
			</div>

			<button className='Basket-checkout' disabled={basket.length === 0}>
				Checkout
			</button>
		</div>
	);
}

export default Basket;
