'use strict';
import React, { Component } from 'react';

export default class Order extends Component {
	constructor() {
		super();
		this.state = { name: '', email: '' };
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange(event) {
		let val = event.target.value;
		let name = event.target.name;
		this.setState({ [name]: val });
	}
	onSubmit(event) {
		event.preventDefault();
		//the only thing this function does is console.log. in the real world you'd probably have submit functionality that hits your backend to perform a CRUD operation (like through axios, for example)
		console.log('SUBMITTING: ', this.state);
	}

	render() {
		const food = this.props.food;
		return (
			<div>
				<div id="order-container">
					<h3>ORDER SOME {food.name}</h3>
					<div />
				</div>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Name</label>
						<input
							type="text"
							id="name-field"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="text"
							id="email-field"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
					<button type="submit">SUBMIT ORDER</button>
				</form>
			</div>
		);
	}
}
