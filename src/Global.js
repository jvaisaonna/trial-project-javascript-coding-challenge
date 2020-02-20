export const FOOD_LIST = [
	{
		name: "Mr. Beefy",
		description:
			"Toasted Brioche Bun, Mayo, Aussie Angus Beef Patty (200g), Pickles, Thick Cut Australian Tomatoes, Sliced Onion, Cos Lettuce, Ketchup and Frenchie’s Mustard",
		price: 108,
		options: [
			{
				name: "Burger - Doneness",
				isMultiple: false,
				choices: [
					"Rare",
					"Medium Rare",
					"Medium",
					"Medium Well",
					"Well Done"
				]
			},
			{
				name: "Burger - Without",
				isMultiple: true,
				choices: [
					"Pickles",
					"Thick Cut Australian Tomatoes",
					"Sliced Onion",
					"Cos Lettuce"
				]
			}
		]
	},
	{
		name: "Aye Aye Captain",
		description:
			"Toasted Brioche Bun, Tartare Sauce, Beer Battered Fish, Mushy Peas and French Fries (inside the burger)",
		price: 118,
		options: [
			{
				name: "Burger - Without",
				isMultiple: true,
				choices: ["Tartare Sauce", "Mushy Peas"]
			}
		]
	},
	{
		name: "MMMM...Bacon",
		description:
			"Toasted Brioche Bun, Streaky USA Bacon, American Sliced Cheese, Mayo, Aussie Angus Beef Patty (200g), Pickles, Thick Cut Australian Tomatoes, Sliced Onion, Cos Lettuce, Ketchup and Frenchie’s Mustard",
		price: 128,
		options: [
			{
				name: "Burger - Doneness",
				isMultiple: false,
				choices: [
					"Rare",
					"Medium Rare",
					"Medium",
					"Medium Well",
					"Well Done"
				]
			},
			{
				name: "Burger - Without",
				isMultiple: true,
				choices: [
					"Mayo",
					"Pickles",
					"Thick Cut Australian Tomatoes",
					"Sliced Onion",
					"Cos Lettuce",
					"ketchup"
				]
			}
		]
	},
	{
		name: "Tea",
		description: "",
		price: 20,
		options: [
			{
				name: "Type",
				isMultiple: false,
				choices: ["Hot", "Cold"]
			},
			{
				name: "Less",
				isMultiple: true,
				choices: ["Ice", "Sugar"]
			},
			{
				name: "Free",
				isMultiple: true,
				choices: ["Ice", "Sugar"]
			}
		]
	},
	{
		name: "Coke",
		description: "",
		price: 25,
		options: [
			{
				name: "Size",
				isMultiple: false,
				choices: ["Small", "Regular", "Large"]
			}
		]
	}
];
