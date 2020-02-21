import React, { useContext, useState, useEffect } from "react";
import "./FoodModal.css";
import restaurantContext from "../../context/RestaurantContext";

function FoodModal() {
	const [value, setValue] = useState({
		quantity: 1,
		selectedOptions: []
	});

	const restaurant = useContext(restaurantContext);
	const food = restaurant.selectedFood;
	const isEmpty = JSON.stringify(food) === JSON.stringify({});

	let foodOptionsCoponent = [];
	if (!isEmpty) {
		food.options.forEach((option, index) => {
			foodOptionsCoponent.push(<h3 key={index}>{option.name}</h3>);
			option.choices.forEach((choice, index) => {
				foodOptionsCoponent.push(
					<div
						key={option.name + ": " + choice}
						className='Food-choice'
					>
						<input
							key={option.name + ": " + choice}
							type={option.isMultiple ? "checkbox" : "radio"}
							id={option.name + ": " + choice}
							name={option.name}
							value={option.name + ": " + choice}
							onChange={e => handleOption(e)}
							checked={
								value.selectedOptions.indexOf(
									option.name + ": " + choice
								) > -1
							}
						/>
						<label
							key={"label - " + option.name + ": " + choice}
							htmlFor={option.name + ": " + choice}
						>
							{choice}
						</label>
					</div>
				);
			});
		});
	}

	const handleChange = e => {
		e.preventDefault();
		setValue({ ...value, [e.target.name]: e.target.value });
	};

	const handleOption = e => {
		const choice = e.target;
		let newOptions = [...value.selectedOptions];

		if (e.target.type === "radio") {
			let selectedChoice = newOptions.find(
				item => item.indexOf(choice.name) >= 0
			);
			if (selectedChoice !== undefined) {
				newOptions.splice(newOptions.indexOf(selectedChoice), 1);
			}

			newOptions.push(choice.value);
		} else {
			if (newOptions.indexOf(choice.value) >= 0) {
				newOptions = newOptions.splice(
					newOptions.indexOf(choice.value),
					1
				);
			} else {
				newOptions.push(choice.value);
			}
		}

		newOptions.sort();
		setValue({ ...value, selectedOptions: newOptions });
	};

	useEffect(() => {
		setValue({
			quantity: 1,
			selectedOptions: []
		});
	}, [isEmpty]);

	return (
		<div>
			{!isEmpty ? (
				<div className='FoodModal'>
					<div className='Food-selection-container'>
						<img alt='' />
						<h3>{food.name}</h3>
						<p>{food.description}</p>
						<p>HK${food.price}</p>

						<div className='Food-quantity'>
							<label htmlFor='quantity'>Quantity :</label>
							<select
								id='quantity'
								name='quantity'
								value={value.quantity}
								onChange={e => handleChange(e)}
							>
								{new Array(9).fill(0).map((value, index) => (
									<option key={index} value={index + 1}>
										{index + 1}
									</option>
								))}
							</select>
						</div>
						<div className='Food-options'>
							{foodOptionsCoponent}
						</div>
						<div className='Food-button-group'>
							<button
								onClick={() => restaurant.cancelSelectFood()}
							>
								Cancel
							</button>
							<button
								onClick={() =>
									restaurant.addFoodOrderToBasket({
										name: food.name,
										price: food.price,
										quantity: value.quantity,
										selectedOption: value.selectedOptions.join(
											", "
										)
									})
								}
							>
								Add to Order
							</button>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default FoodModal;
