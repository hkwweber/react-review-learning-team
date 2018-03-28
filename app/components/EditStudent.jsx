"use strict";
import React, { Component } from "react";

import { connect } from "react-redux";
import { putStudent } from "../store";

class EditStudent extends Component {

  constructor(props) {
    super(props)
    let selectedStudent = props.selectedStudent;
    this.state = {firstName: selectedStudent.firstName, lastName: selectedStudent.lastName, email: selectedStudent.email, gpa: selectedStudent.gpa, campusId: selectedStudent.campusId}
    // this.state = {firstName: '', lastName: '', email: '', gpa: '', campusId: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let key = e.target.name;
    let val = e.target.value;
    console.log(e.target);
    this.setState({[key]: val});
  }

  render() {
    console.log('selected student: ', this.props.selectedStudent);
    console.log(this.state);
    const campuses = this.props.campuses;
    const newStudentObj = Object.assign({}, this.state, {gpa: Number(this.state.gpa), campusId: Number(this.state.campusId)})
    console.log('obj: ', newStudentObj);
    return (<div className="form-container container">
            <h2 className="page-title page-name">Edit Student</h2>
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
    campuses: state.campuses,
    selectedStudent: state.selectedStudent
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    handleSubmit(updatedInfo, e) {
      e.preventDefault();

      dispatch(putStudent(ownProps.match.params.studentId, updatedInfo, ownProps.history));
    }
    }
  }



const EditStudentContainer = connect(mapStateToProps, mapDispatchToProps)(EditStudent);

export default EditStudentContainer;
