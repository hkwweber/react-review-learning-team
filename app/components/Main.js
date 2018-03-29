"use strict";
import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import AllFoods from "./AllFoods";
import Order from "./Order";
import SingleFood from "./SingleFood";

export default class Main extends Component {
	constructor() {
		super();
		this.state = {
			selectedFood: {}
		};
		this.selectAFood = this.selectAFood.bind(this);
	}

	selectAFood(food) {
		this.setState({ selectedFood: food });
	}

	render() {
		return (
			<div>
				<Header />
				<Router>
					<div className="app-container">
						<Route
							exact
							path="/"
							render={() => (
								<AllFoods
									selectAFood={this.selectAFood}
									selectedFood={this.state.selectedFood}
								/>
							)}
						/>
						<Route path="/foods/:foodId" component={SingleFood} />
						<Route
							path="/order"
							render={() => <Order food={this.state.selectedFood} />}
						/>
					</div>
				</Router>
			</div>
		);
	}
}
