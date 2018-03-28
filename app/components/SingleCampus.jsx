"use strict";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentList from "./StudentList";
import { connect } from "react-redux";
import { fetchSelectedCampus, deleteCampusOnServer } from "../store";

class SingleCampus extends Component {
  componentDidMount() {
    this.props.findCampus();
  }

  render() {
    const campus = this.props.selectedCampus;

    return (
      <div className="container app-container">
        <div className="container page-title">
          <div className="container campus-pg-header-container">
            <img className="campus-pg-img" src={campus.imageUrl} />
            <div className="campus-pg-header">
              <h3 className="page-name">{campus.name}</h3>
              <span className="campus-description">{campus.description}</span>
            </div>
          </div>

          <div className="campus-btn-div">
            <Link to={`/campuses/${campus.id}/edit`}>
              <div>
                <button className="btn btn-secondary" id="add-student-btn">
                  EDIT
                </button>
              </div>
            </Link>
            <div>
              <button
                onClick={this.props.handeDelete}
                className="btn btn-danger"
                id="delete-student-btn"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>

        <StudentList
          students={this.props.students}
          campus={this.props.selectedCampus}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedCampus: state.selectedCampus,
    students: state.campusStudents
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    findCampus() {
      const id = ownProps.match.params.campusId;
      dispatch(fetchSelectedCampus(id));
    },
    handeDelete(e) {
      e.preventDefault();
      const id = ownProps.match.params.campusId;
      dispatch(deleteCampusOnServer(id, ownProps.history));
    }
  };
};

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(
  SingleCampus
);

export default SingleCampusContainer;
