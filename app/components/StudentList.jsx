"use strict";
import React from "react";
import {Link} from 'react-router-dom';

const StudentList = (props) => {
  const students = props.students;
  const campus = props.campus;

  return (
      <div>

      <table className="table student-table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">GPA</th>
            <th scope="col">CAMPUS</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => {
            const campusInfo = student.campus || campus || {}
            return (
              <tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
                <td>{student.email}</td>
                <td>{student.gpa}</td>
                <td><Link to={`/campuses/${student.campusId}`} >{campusInfo.name}</Link></td>
              </tr>
                    )
          })}
        </tbody>
      </table>
      </div>
    );
}

export default StudentList;
