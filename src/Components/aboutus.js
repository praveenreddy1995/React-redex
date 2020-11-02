import React from "react";
import container from "../utils/container";
class AboutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submit=this.submit.bind(this);
  }
  // componentDidMount() {
  //   this.props.LoginAction.login();
  // }

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

  
  export default container(AboutComponent, state => state);

