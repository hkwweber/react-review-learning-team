"use strict";
import React, { Component } from "react";

import { connect } from "react-redux";
import { putCampus } from "../store";

class EditCampus extends Component {

  constructor(props) {
    super(props)
    let selectedCampus = props.selectedCampus;
    this.state = {name: selectedCampus.name, description: selectedCampus.description};

    this.handleChange = this.handleChange.bind(this);
  }

handleChange(e) {
  let key = e.target.name;
  let val = e.target.value;
  this.setState({[key]: val});
}

render() {
  return (
   <div className="form-container container">
            <h2 className="page-title page-name">Edit Campus</h2>
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

const mapStateToProps = (state) => {
  return {
    selectedCampus: state.selectedCampus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    handleSubmit(updatedInfo, e) {
      e.preventDefault();

      dispatch(putCampus(ownProps.match.params.campusId, updatedInfo, ownProps.history));
    }
    }
}

const EditCampusContainer = connect(mapStateToProps, mapDispatchToProps)(EditCampus);

export default EditCampusContainer;
