import React from "react";
import { browserHistory } from "react-router";
import container from "../utils/container";
import {loginAction} from "../Actions/index";
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
    this.navigate = this.navigate.bind(this);
  }

  email(e) {
    this.setState({ username: e.target.value });
  }
  password(e) {
    this.setState({ pass: e.target.value });
  }
  login(event) {
    loginAction();
    var checkfalg = 0;
    var username = this.state.username;
    var password = this.state.pass;
   
    if(username==="" && password===""){
      alert("please fill the detailes");
    }else{
      this.state.data.map(validdata);
      function validdata(elem) {
        if (username === elem.email && password === elem.password) {
          checkfalg = 1;
        }
      }
    }
  
    if (checkfalg === 1) {
      alert("Login sucessful");
      browserHistory.push("/home");
    } else {
      alert("Invalid login detailes");
    }
  }
  navigate() {
    browserHistory.push("/register");
    window.location.reload();
  }
  render() {
    return (
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>You are A new Employee Please Register Here!</p>
            <input
              type="submit"
              name=""
              value="Register"
              onClick={this.navigate}
            />
            <br />
          </div>
          <div className="col-md-9 register-right">
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

export default container(LoginComponent, state => state);
