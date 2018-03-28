"use strict";
import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx'

import SingleCampus from './SingleCampus.jsx'
import SingleStudent from './SingleStudent.jsx';

import AllStudentsContainer from './AllStudents.jsx';
import AllCampusesContainer from './AllCampuses.jsx'
import AddStudentContainer from './AddStudent.jsx';
import AddCampusContainer from './AddCampus.jsx';
import EditStudentContainer from './EditStudent.jsx';
import EditCampusContainer from './EditCampus.jsx';

import store, {fetchStudents, fetchCampuses} from '../store';


export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      campuses: [],
      students: []
    };

  }

  componentDidMount() {
    store.dispatch(fetchStudents());
    store.dispatch(fetchCampuses());

  }

  render() {

    return (
      <Router>
        <div>
          <Navbar />
          <div id="app">
          <Switch>
          <Route exact path="/" component={AllCampusesContainer}/>
          <Route exact path="/campuses" component={AllCampusesContainer} />
          <Route exact path="/students" component={AllStudentsContainer}/>
          <Route path="/campuses/:campusId/edit" component={EditCampusContainer} />
          <Route path= '/campuses/:campusId' component={SingleCampus} />
          <Route path="/students/:studentId/edit" component ={EditStudentContainer} />
          <Route path= '/students/:studentId' component={SingleStudent} />
          <Route path='/add-student' component={AddStudentContainer} />
          <Route path="/add-campus" component={AddCampusContainer} />
          <Route component={AllCampusesContainer} />
          </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
