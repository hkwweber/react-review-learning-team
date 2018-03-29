"use strict";
import React from "react";
import {Link} from 'react-router-dom'


const Belly = props => {
	const food = props.food;
	return (
		<div id="belly-container">
		<h3>MY BELLY WOULD LIKE:</h3>
		<div>{food.name}</div>
		<Link to="/order">PLACE ORDER</Link>
		</div>
	);
};

export default Belly;
