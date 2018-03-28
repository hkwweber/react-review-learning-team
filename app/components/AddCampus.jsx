"use strict";
import React, { Component } from "react";

import { connect } from "react-redux";
import { postCampus } from "../store";


class AddCampus extends Component {

  constructor() {
    super()
    this.state = {name: '', description: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let key = e.target.name;
    let val = e.target.value;
    this.setState({[key]: val});
  }

  render () {

  return (
   <div className="form-container container">
            <h2 className="page-title page-name">Add Campus</h2>
    <form className="form" onSubmit={(evt) => this.props.handleSubmit(this.state, evt)}>
    <div className="form-group">
    <label htmlFor="nameI">Name</label>
    <input className="form-control" name="name" id="nameI" placeholder="Name" value={this.state.name} onChange={this.handleChange}></input>
    </div>
    <div className="form-group">
    <label htmlFor="descriptionI">Description</label>
    <input className="form-control" name="description" id="descriptionI" value={this.state.description} onChange={this.handleChange} placeholder="Description"></input>
    </div>
    <button type="submit" className="btn btn-default">Submit</button>
    </form>
    </div>
          )
}

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit (newCampus, e) {
      e.preventDefault();
      dispatch(postCampus(newCampus, ownProps.history));
    }
  }
}

const AddCampusContainer = connect(null, mapDispatchToProps)(AddCampus);

export default AddCampusContainer;
