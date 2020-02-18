import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Action from "../Actions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./search";
class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source:[]
    };
  }
  componentDidMount() {
    this.props.SearchAction.search();
  }
  componentWillReceiveProps(props) {
    console.log("search data>>>>>>", JSON.stringify(props.searchOptions.data.results));
    this.setState({source:props.searchOptions.data.results})
  }
  render() {
    const source= this.state.source.map(i => i.name);

    console.log("state data>",JSON.stringify(source))
    return (
      <div>
          <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="h6" color="inherit">
                    {/* <img src={logo} alt="no logo"/> */}
                  </Typography>
                  <div className="navbar_container">
                  <nav id="navbar-example2" className="navbar navbar-light">
              <ul className="nav nav-pills">
                <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Logout
                  </Link>
                </li>
              </ul>
            </nav>
            </div>
                </Toolbar>
              </AppBar>
      <div className="search_container">
      <Search
        options={source}
      />
      </div>
      </div>
    );
  }
}


function mapStateToProps(state, props) {
    return {
        searchOptions: state.searchReducers.search_sucess
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        SearchAction: bindActionCreators(Action, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
