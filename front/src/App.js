import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from "./module/form";
import List from "./module/list";
import Edit from "./module/edit";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            className="navbar-brand"
            href="/"
            style={{ color: "orange", fontWeight: "bold" }}
          >
            АндрюхинПоиск
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Все фильмы
                </Link>
              </li>
            </ul>
            <Link className="btn btn-info " to="/form">
              Добавить фильм
            </Link>
          </div>
        </nav>

        <div className="container py-4">
          <div className="row">
            <Route path="/" exact component={List} />
            <Route path="/form" component={Form} />
            <Route path="/edit/:id" component={Edit} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
