import React from "react";
import "./App.css";
import LoginComponent from "./Components/loginComponent";
import RegisterComponent from "./Components/registerComponent";
import HomeComponent from './Components/home';
import AboutusComponent from './Components/aboutus';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import {createStore} from "./Store";
import logo from "./Images/logo.jpg";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import initialState from "./intialState"

const store = createStore(initialState);
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});
function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
        <div>
          <div className="">
        
            <div className={classes.root}>
              <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="h6" color="inherit">
                    <img className="logo" src={logo} alt="no logo"/>
                  </Typography>
                  <div className="navbar_container">
                  <nav id="navbar-example2" className="navbar navbar-light">
              <ul className="nav nav-pills">
                <li className="nav-item">
                <Link className="nav-link" to={"/home"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                   About us
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/register"}>
                   Register
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="/"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      one
                    </a>
                    <a className="dropdown-item" href="/">
                      two
                    </a>
                    <div role="separator" className="dropdown-divider" />
                    <a className="dropdown-item" href="/">
                      three
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            </div>
                </Toolbar>
              </AppBar>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/register" component={RegisterComponent} />
            <Route path="/home" component={HomeComponent} />
            <Route path="/about" component={AboutusComponent} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
