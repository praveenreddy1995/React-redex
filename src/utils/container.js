import React, { Component } from "react";
import { connect } from "react-redux";

export default function container(
  AppComponent,
  mapStateToProps = state => state
) {
  class Container extends Component {
    render() {
      return <AppComponent {...this.props} />
    }
  }

  const connector = connect(mapStateToProps);

  return connector(Container);
}