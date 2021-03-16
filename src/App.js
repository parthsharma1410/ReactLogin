
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Teacher, Student, TeacherSignup, TeacherLogin, StudentSignup, StudentLogin } from './Components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
        </Switch>
        <Switch>
          <Route path="/teacher" exact component={() => <Teacher />} />
        </Switch>
        <Switch>
          <Route path="/student" exact component={() => <Student />} />
        </Switch>
        <Switch>
          <Route path="/teachersignup" exact component={() => <TeacherSignup />} />
        </Switch>
        <Switch>
          <Route path="/teacherlogin" exact component={() => <TeacherLogin />} />
        </Switch>
        <Switch>
          <Route path="/studentsignup" exact component={() => <StudentSignup />} />
        </Switch>
        <Switch>
          <Route path="/studentlogin" exact component={() => <StudentLogin />} />
        </Switch> 
      </Router>
    </div>
  );
}

export default App;