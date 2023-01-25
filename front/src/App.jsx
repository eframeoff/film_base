import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Form, List, Edit } from "./module";
import { CONTENT } from "./utils";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            {CONTENT.LOGO}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  {CONTENT.ALL_FILMS}
                </Link>
              </li>
            </ul>
            <Link className="btn btn-info" to="/form">
              {CONTENT.ADD_FILM}
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
