import React from "react";
import "./App.css";
import LoginComponent from "./Components/loginComponent";
import RegisterComponent from "./Components/registerComponent";
import HomeComponent from './Components/home';
import AboutusComponent from './Components/aboutus';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./Store/config";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const store = configureStore();
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
            
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={LoginComponent} />
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
