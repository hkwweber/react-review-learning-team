"use strict";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Belly from "./Belly";
import axios from "axios";

export default class AllFoods extends Component {
	constructor() {
		super();
		this.state = { foods: [] };
	}

	componentDidMount() {
		axios
			.get("/api/foods/")
			.then(res => res.data)
			.then(foods => this.setState({ foods }))
			.catch(error => console.log('error!!', error))
	}

	render() {
		const foods = this.state.foods;
		const selectAFood = this.props.selectAFood;
		const selectedFood = this.props.selectedFood;
		return (
			<div className="app-container">
				<div id="food-list-container">
					{foods.map(food => {
						return (
							<div key={food.name} className="food-thumbnail">
								<img src={food.photo} />
								<div>{food.name}</div>
								<div>
									<Link to={`/foods/${food.id}`}>
										VIEW DETAILS
									</Link>
								</div>
								<button onClick={() => selectAFood(food)}>
									CHOOSE
								</button>
							</div>
						);
					})}
				</div>
				<Belly food={selectedFood} />
			</div>
		);
	}
}


// {
//     name: "Waffles",
//     photo: 'https://i.imgur.com/JncGdNF.jpg',
//     price: 9,
//     description: 'waffle tiiiiiiiiiiiiiime'
//   },
//   {
//     name: "Eggs Benedict",
//     photo: "https://i.imgur.com/kI1980g.jpg",
//     price: 15,
//     description: 'fancy or gross?'
//   }
