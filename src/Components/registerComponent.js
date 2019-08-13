import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Action from "../Actions";
import { browserHistory } from 'react-router';
import "../Css/registerpage.css";
class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Fname: "",
      Lname: "",
      pass: "",
      cpass: "",
      Email: "",
      phone: "",
      question: "",
      answer: "",
      fields:{}
    };
    this.firstname = this.firstname.bind(this);
    this.lastname = this.lastname.bind(this);
    this.password = this.password.bind(this);
    this.cpassword = this.cpassword.bind(this);
    this.emailchange = this.emailchange.bind(this);
    this.question = this.question.bind(this);
    this.answer = this.answer.bind(this);
    this.phonechange = this.phonechange.bind(this);
    this.employeeSubmit = this.employeeSubmit.bind(this);
    this.navigate=this.navigate.bind(this);
  }
  componentWillReceiveProps(props) {
    //console.log("after recving props>>>>>>", JSON.stringify(props.registerDetailes));
  }
  firstname(e) {
    this.setState({ Fname: e.target.value });
  }
  lastname(e) {
    this.setState({ Lname: e.target.value });
  }
  password(e) {
    this.setState({ pass: e.target.value });
  }
  cpassword(e) {
    this.setState({ cpass: e.target.value });
  }
  emailchange(e) {
    this.setState({ Email: e.target.value });
  }
  question(e) {
    this.setState({ question: e.target.value });
  }
  answer(e) {
    this.setState({ answer: e.target.value });
  }
  phonechange(e) {
    this.setState({ phone: e.target.value });
  }

  validater(){

  }
  employeeSubmit(e) {
    if( this.state.Fname===""){
      //alert("please fill the fields")
    }else{
    let data = {
      fname: this.state.Fname,
      lname: this.state.Lname,
      email: this.state.Email,
      phone: this.state.phone,
      password: this.state.pass,
      cpassword: this.state.cpass,
      Question: this.state.question,
      Answer: this.state.answer
    };
  
    this.props.RegisterAction.register(data);
  }
  }
  navigate(){
    browserHistory.push('/login');
    window.location.reload();
  }
  render() {
    return (
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>I'm very optimistic. I'm happy-go-lucky, I guess. I try to be.</p> 
            <input type="submit" name="" value="Login" onClick={this.navigate} />
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
                <h3 className="register-heading">Apply as a Employee</h3>
                <form>
                  <div className="row register-form">
                    <div className="col-md-6 login_tab">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name *"
                          defaultValue={this.state.fields["firstname"]}
                          onChange={this.firstname}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name *"
                          defaultValue={this.state.fields["lastname"]}
                          onChange={this.lastname}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password *"
                          defaultValue={this.state.fields["password"]}
                          onChange={this.password}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password *"
                          defaultValue={this.state.fields["cpassword"]}
                          onChange={this.cpassword}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email *"
                          defaultValue={this.state.fields["emailchange"]}
                          onChange={this.emailchange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          minLength="10"
                          maxLength="10"
                          className="form-control"
                          placeholder="Your Phone *"
                          defaultValue={this.state.fields["phonechange"]}
                          onChange={this.phonechange}
                          required
                        />
                      </div>
                      {/* <div className="form-group">
                        <select
                          className="form-control"
                          onChange={this.question}
                        >
                          <option defaultValue="" className="hidden" disabled>
                            Please select your Sequrity Question
                          </option>
                          <option defaultValue="What is your Birthdate?">
                            What is your Birthdate?
                          </option>
                          <option defaultValue="What is Your old Phone Number">
                            What is Your old Phone Number
                          </option>
                          <option defaultValue="What is your Pet Name?">
                            What is your Pet Name?
                          </option>
                        </select>
                      </div> */}
                      {/* <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Answer *"
                          defaultValue={this.state.fields["answer"]}
                          onChange={this.answer}
                        />
                      </div> */}
                      <input
                        type="submit"
                        className="btnRegister"
                        defaultValue="Register"
                        onClick={this.employeeSubmit}
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
    registerDetailes: state.registerReducers.register_sucess
  };
}

function mapDispatchToProps(dispatch) {
  return {
    RegisterAction: bindActionCreators(Action, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent);

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
