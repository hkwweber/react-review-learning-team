import { createStore, applyMiddleware, combineReducers } from "redux";
// import reducer from './reducers'; //this was from when there was an extra index file in reducers directory
/* combineReducers is not currently used, but eventually should be for modular code :D */
import loggingMiddleware from "redux-logger"; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from "redux-thunk"; // https://github.com/gaearon/redux-thunk

import axios from "axios";

const initialState = {
  students: [],
  newStudentEntry: {},
  campuses: [],
  newCampusEntry: {},
  selectedCampus: {},
  campusStudents: [],
  selectedStudent: {}
};

const GET_STUDENTS_FROM_SERVER = "GET_STUDENTS_FROM_SERVER";
const GET_NEW_STUDENT_FROM_SERVER = "GET_NEW_STUDENT_FROM_SERVER";


const GET_CAMPUSES_FROM_SERVER = "GET_CAMPUSES_FROM_SERVER";
const GET_NEW_CAMPUS_FROM_SERVER = "GET_NEW_CAMPUS_FROM_SERVER";


const GET_SELECTED_STUDENT = "GET_SELECTED_STUDENT";
const GET_SELECTED_CAMPUS = "GET_SELECTED_CAMPUS";

const UPDATE_STUDENT = "UPDATE_STUDENT";
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

const DELETE_STUDENT = 'DELETE_STUDENT';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

export const getStudentsFromServer = students => {
  return {
    type: GET_STUDENTS_FROM_SERVER,
    students
  };
};

export const getCampusesFromServer = campuses => {
  return {
    type: GET_CAMPUSES_FROM_SERVER,
    campuses
  };
};

export const getNewStudentFromServer = newStudent => {
  return {
    type: GET_NEW_STUDENT_FROM_SERVER,
    newStudent
  };
};

export const getNewCampusFromServer = newCampus => {
  return {
    type: GET_NEW_CAMPUS_FROM_SERVER,
    newCampus
  };
};


export const getSelectedCampus = campus => {
  return {
    type: GET_SELECTED_CAMPUS,
    campus
  };
};

export const getSelectedStudent = student => {
  return {
    type: GET_SELECTED_STUDENT,
    student
  };
};

export const deleteStudent = student => {
  return {
    type: DELETE_STUDENT,
    student
  }
}

export const deleteCampus = campus => {
  return {
    type: DELETE_CAMPUS,
    campus
  }
}

export const updateStudent = student => {
  return {
    type: UPDATE_STUDENT,
    student
  }
}

export const updateCampus = campus => {
  return {
    type: UPDATE_CAMPUS,
    campus
  }
}

// THUNKING:

export const fetchStudents = () => {
  return function thunk(dispatch) {
    return axios
      .get("/api/students")
      .then(res => res.data)
      .then(students => {
        dispatch(getStudentsFromServer(students));
      })
      .catch(err => console.log(err));
  };
};

export const fetchCampuses = () => {
  return function thunk(dispatch) {
    return axios
      .get("/api/campuses")
      .then(res => res.data)
      .then(campuses => {
        dispatch(getCampusesFromServer(campuses));
      })
      .catch(err => console.log(err));
  };
};

export const fetchSelectedCampus = campusId => {
  return function thunk(dispatch) {
    return axios
      .get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => {
        dispatch(getSelectedCampus(campus));
      })
      .catch(err => console.log(err.stack));
  };
};

export const fetchSelectedStudent = studentId => {
  return function thunk(dispatch) {
    return axios
      .get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        dispatch(getSelectedStudent(student));
      })
      .catch(err => console.log(err));
  };
};

export const deleteStudentOnServer = (studentId, history) => {
  return function thunk(dispatch) {
    return axios.delete(`/api/students/${studentId}`)
    .then(res => {
      return axios.get('/api/students')
      })
    .then(res => res.data)
    .then(students => {
      dispatch(getStudentsFromServer(students));
      history.push('/students');

    })
  }
}

export const deleteCampusOnServer = (campusId, history) => {
  return function thunk(dispatch) {
    return axios.delete(`/api/campuses/${campusId}`)
    .then(res => {
      return axios.get('/api/campuses')
      })
    .then(res => res.data)
    .then(campuses => {
      dispatch(getCampusesFromServer(campuses));
      history.push('/');

    })
  }
}

export const postStudent = (student, history) => {
  return function thunk(dispatch) {
    return axios.post('/api/students', student)
    .then(res => res.data)
    .then(newStudent => {
      dispatch(getNewStudentFromServer(newStudent));
      history.push(`/students/${newStudent.id}`);
    })
  }
}

export const postCampus = (campus, history) => {
  return function thunk(dispatch) {
    return axios.post('/api/campuses', campus)
    .then(res => res.data)
    .then(newCampus => {
      dispatch(getNewCampusFromServer(newCampus));
      history.push(`/campuses/${newCampus.id}`);
    })
  }
}

export const putStudent = (studentId, studentInfo, history) => {
  return function thunk(dispatch) {
    return axios.put(`/api/students/${studentId}`, studentInfo)
    .then(res => res.data)
    .then(updatedStudent => {
      dispatch(updateStudent(updatedStudent));
      history.push(`/students/${studentId}`)
    })
    .catch(err => console.log(err.stack));
  }
}

export const putCampus = (campusId, campusInfo, history) => {
  return function thunk(dispatch) {
    return axios.put(`/api/campuses/${campusId}`, campusInfo)
    .then(res => res.data)
    .then(updatedCampus => {
      dispatch(updateCampus(updatedCampus));
      history.push(`/campuses/${campusId}`)
    })
    .catch(err => console.log(err.stack));
  }
}

// MY REDUCER:

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS_FROM_SERVER:
      return Object.assign({}, state, { students: action.students });
    case GET_NEW_STUDENT_FROM_SERVER:
      return Object.assign({}, state, {
        students: [...state.students, action.newStudent]
      });
    case GET_CAMPUSES_FROM_SERVER:
      return Object.assign({}, state, { campuses: action.campuses });
    case GET_NEW_CAMPUS_FROM_SERVER:
      return Object.assign({}, state, {
        campuses: [...state.campuses, action.newCampus]});
    case GET_SELECTED_CAMPUS:
      return Object.assign({}, state, {selectedCampus: action.campus, campusStudents: action.campus.students});
    case GET_SELECTED_STUDENT:
      return Object.assign({}, state, { selectedStudent: action.student });
    case UPDATE_STUDENT:
      return Object.assign({}, state, {students: state.students.map(student => {
        if (student.id === action.student.id) return action.student;
        else return student;
      })});
    case UPDATE_CAMPUS:
      return {...state, campuses: state.campuses.map(campus => {
          if (campus.id === action.campus.id) return action.campus;
          else return campus;
        })}
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggingMiddleware)
);

export default store;
