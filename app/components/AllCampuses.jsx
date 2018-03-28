"use strict";
import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';


const AllCampuses = (props) => {
  const campuses = props.campuses;
  return (
    <div className="container campus-container">
      <div className="row">
        {campuses.map(campus => {
          return (
            <div className="col-xs-4 thumbnail" key={campus.id}>
              <Link to={`campuses/${campus.id}`} value={campus.id}>
                <img src={campus.imageUrl} />
                <div className="caption">
                  <span>{campus.name}</span>
                </div>
              </Link>
            </div>
          );
        })}
        </div>
        <div className="container btn-container">
        <Link to="/add-campus">
        <div><button className="btn btn-secondary">+ ADD CAMPUS</button></div>
        </Link>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const AllCampusesContainer = connect(mapStateToProps)(AllCampuses);

export default AllCampusesContainer;
