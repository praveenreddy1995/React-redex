import React from "react";
import container from "../utils/container";
class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Home pages............</h1>
      </div>
    );
  }
} 
export default container(HomeComponent, state => state);
