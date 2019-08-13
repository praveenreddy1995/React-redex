import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Action from "../Actions";
class AboutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submit=this.submit.bind(this);
  }
  componentDidMount() {
    this.props.LoginAction.login();
  }
  componentWillReceiveProps(props) {
    console.log("after recving props>>>>>>", JSON.stringify(props.loginCredentials));
  }
  submit(values) {
    alert("submitted");
    console.log(values);
  }
  render() {
    return (
      <div className="container">
     <h1>About us page.................</h1>
    </div>
    );
  }
}


function mapStateToProps(state, props) {
    return {
        loginCredentials: state.loginReducers.login_sucess
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        LoginAction: bindActionCreators(Action, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AboutComponent);

