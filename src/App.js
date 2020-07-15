import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TaskForToday from './components/TaskForToday';
import DragableBodyRow from './components/AllTask';
import Chart from './components/Chart';
import FormTask from './components/FormTask';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Задачи на сегодня</Link>
            </li>
            <li>
              <Link to="/all-task">Все задачи</Link>
            </li>
            <li>
              <Link to="/statistics">Статистика</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <FormTask />
            <TaskForToday />
          </Route>
          <Route path="/all-task">
            {/* <FormTask /> */}
            <DragableBodyRow />
          </Route>
          <Route path="/statistics">
            <Chart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
