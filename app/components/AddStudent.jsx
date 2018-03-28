"use strict";
import React, { Component } from "react";

import { connect } from "react-redux";
import { postStudent } from "../store";

class AddStudent extends Component {

  constructor () {
    super()
    this.state = {firstName: '', lastName: '', email: '', gpa: '', campusId: '2'}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let key = e.target.name;
    let val = e.target.value;
    this.setState({[key]: val});
  }


  render () {
    const campuses = this.props.campuses;
    const newStudentObj = Object.assign({}, this.state, {gpa: Number(this.state.gpa), campusId: Number(this.state.campusId)})
    return (<div className="form-container container">
            <h2 className="page-title page-name">Add Student</h2>
    <form className="form" onSubmit={(evt) => this.props.handleSubmit(newStudentObj, evt)}>
    <div className="form-group">
    <label htmlFor="first-nameI">First Name</label>
    <input className="form-control" name="firstName" id="first-nameI" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}></input>
    </div>
    <div className="form-group">
    <label htmlFor="last-nameI">Last Name</label>
    <input className="form-control" name="lastName" id="last-nameI" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name"></input>
    </div>
    <div className="form-group">
    <label htmlFor="emailI">Email</label>
    <input className="form-control" name="email" id="emailI" onChange={this.handleChange} value={this.state.email} placeholder="Email"></input>
    </div>
    <div className="form-group">
    <label htmlFor="gpaI">GPA</label>
    <input className="form-control" name="gpa" id="gpaI" onChange={this.handleChange} value={this.state.gpa} placeholder="GPA"></input>
    </div>
    <div className="form-group">
    <label htmlFor="campusI">Campus</label>
    <select className="form-control" id="campusI" name="campusId" onChange={this.handleChange} value={this.state.campusId}>
    {campuses.map(campus => {
      return (
              <option key={campus.id} value={campus.id}>{campus.name}</option>)
    })}
    </select>
  </div>
    <button type="submit" className="btn btn-default">Submit</button>
    </form>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    handleSubmit(newStudent, e) {
      e.preventDefault();
      dispatch(postStudent(newStudent, ownProps.history));
    }
  }
}

const AddStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent);

export default AddStudentContainer;
