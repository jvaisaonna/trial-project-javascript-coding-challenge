import React from "react";
import "./Item.css";

function Item(props) {
	return (
		<div className='Item'>
			<img alt='' />
			<h3>{props.name}</h3>
			<p>{props.description}</p>
			<div style={{ flex: 1 }}></div>
			<button
				className='Item-add-to-order'
				onClick={() => props.selectingFood(props)}
			>
				Add to Order
			</button>
		</div>
	);
}

export default Item;
