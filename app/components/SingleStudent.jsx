"use strict";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchSelectedStudent, deleteStudentOnServer } from "../store";

class SingleStudent extends Component {
  componentDidMount() {
    this.props.findStudent();
  }

  render() {
    const student = this.props.selectedStudent;

    const campus = this.props.selectedStudent.campus || {};

    return (
      <div className="container app-container">
      <div className="container page-title">
      <h3 className="page-name">{student.name}</h3>
        <div className="container btn-container">
        <div className='inner-btn-div'>
          <Link to={`/students/${student.id}/edit`}>
            <div>
              <button className="btn btn-secondary" id="add-student-btn">

                EDIT
              </button>
            </div>
          </Link>
          <div>
            <button
              onClick={this.props.handleDelete}
              className="btn btn-danger"
              id="delete-student-btn"
            >

              DELETE
            </button>
          </div>
          </div>
        </div>
        </div>
        <table className="table student-table">
          <tbody>
            <tr>
              <th scope="col">NAME</th>
              <td scope="col">{student.name}</td>
            </tr>
            <tr>
              <th scope="row">ID</th>
              <td>{student.id}</td>
            </tr>
            <tr>
              <th scope="row">EMAIL</th>
              <td>{student.email}</td>
            </tr>
            <tr>
              <th scope="row">GPA</th>
              <td>{student.gpa}</td>
            </tr>
            <tr>
              <th scope="row">CAMPUS</th>
              <td>
                <Link to={`/campuses/${student.campusId}`}>{campus.name}</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedStudent: state.selectedStudent
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    findStudent() {
      const id = ownProps.match.params.studentId;
      dispatch(fetchSelectedStudent(id));
    },
    handleDelete(e) {
      e.preventDefault();
      const id = ownProps.match.params.studentId;
      dispatch(deleteStudentOnServer(id, ownProps.history));
    }
  };
};

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(
  SingleStudent
);

export default SingleStudentContainer;
