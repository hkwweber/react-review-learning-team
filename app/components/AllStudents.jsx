"use strict";
import React from "react";
import {Link} from 'react-router-dom';
import StudentList from './StudentList';
import { connect } from 'react-redux';



const AllStudents = (props) => {
  const students = props.students;

  return (
     <div className="app-container">
     <div className="container page-title">
     <h3 className="page-name">All Students</h3>
      <div className='container btn-container'>
      <Link to="/add-student"><div><button className="btn btn-secondary" id="add-student-btn">+ ADD STUDENT</button></div></Link>
      </div>
      </div>
      <StudentList students={students}/>
     </div>
          )

}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const AllStudentsContainer = connect(mapStateToProps)(AllStudents);

export default AllStudentsContainer;

