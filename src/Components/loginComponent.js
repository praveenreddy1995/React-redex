import React from "react";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import Action from "../Actions";
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      username: "",
      pass: ""
    };
    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.login = this.login.bind(this);
  }
  componentDidMount() {
    this.props.LoginAction.login();
  }
  componentWillReceiveProps(props) {
    if (props.loginCredentials) {
      let login = props.loginCredentials.data;
      console.log("logindata>>",JSON.stringify(login.name));
      if (props.loginCredentials.status === 200) {
        this.setState({ data: login });
      }
    }
    if (props.loginCredentialsFailed) {
      console.log(JSON.stringify(props.loginCredentialsFailed));
      alert(props.loginCredentialsFailed.name);
    }
  }
  email(e) {
    this.setState({ username: e.target.value });
  }
  password(e) {
    this.setState({ pass: e.target.value });
  }
  login(event) {
    var username = this.state.username;
    var password = this.state.pass;
    const data= this.state.data;
   
    if(username===data.name && password===data.birth_year){
      browserHistory.push("/home");
     
    }else{
      alert(" Please fill the detailes");
    }
  
    // if (checkfalg === 1) {
    //   alert("Login sucessful");
    //   browserHistory.push("/home");
    // } else {
    //   alert("Invalid login detailes");
    // }
  }
  render() {
    return (
      <div className="container register">
        <div className="row">
          <div className="col-md-9">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Employee Login</h3>
                <form action="">
                  <div className="row register-form">
                    <div className="col-md-6 login_tab">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email *"
                          defaultValue=""
                          onChange={this.email}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password *"
                          defaultValue=""
                          onChange={this.password}
                          required
                        />
                      </div>
                      <input
                        type="submit"
                        className="btnRegister"
                        defaultValue="Register"
                        onClick={this.login}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    loginCredentials: state.loginReducers.login_sucess,
    loginCredentialsFailed: state.loginReducers.login_failed
  };
}

function mapDispatchToProps(dispatch) {
  return {
    LoginAction: bindActionCreators(Action, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
