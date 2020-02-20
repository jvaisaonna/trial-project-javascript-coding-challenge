import React from "react";
import "./App.css";

import GlobalState from "./context/GlobalState";

import FoodModal from "./components/FoodModal/FoodModal";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import Basket from "./components/Basket/Basket";

function App() {
	return (
		<GlobalState>
			<div className='App'>
				<div className='App-main'>
					<Intro />
					<Menu />
				</div>
				<div className='App-basket'>
					<Basket />
				</div>
				<FoodModal />
			</div>
		</GlobalState>
	);
}

export default App;
