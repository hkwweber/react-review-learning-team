"use strict";
import React, { Component } from "react";
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import axios from "axios";
import Belly from "./Belly";

export default class SingleFood extends Component {
	constructor() {
		super();
		this.state = { selectedFood: {} };
	}

	componentDidMount() {
		const foodId = this.props.match.params.foodId;
		axios
			.get(`api/foods/${foodId}`)
			.then(res => res.data)
			.then(selectedFood => this.setState({ selectedFood }));
	}

	render() {
		const food = this.state.selectedFood;
		return (
			<div>
				<div>{food.name}</div>
				<img src={food.photo} />
				<div>{food.description}</div>
				<div>${food.price}</div>
			</div>
		);
	}
}
