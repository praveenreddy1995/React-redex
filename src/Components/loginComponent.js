import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Action from "../Actions";
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.LoginAction.login();
  }
  componentWillReceiveProps(props) {
    console.log("after recving props>>>>>>", JSON.stringify(props.loginCredentials));
  }
  render() {
    return (
      <div>
        <h1>login page</h1>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

// function mapStateToProps(state, props) {
//   return {
//     loginCredentials: state.loginReducers.login_sucess
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     LoginAction: bindActionCreators(Action, dispatch)
//   };
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginComponent);

//export default LoginComponent;
