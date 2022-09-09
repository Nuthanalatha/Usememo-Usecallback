import React, { Component, PureComponent } from "react";

export default class ClasspureComponent extends PureComponent {
  //for pure class we extend with purecomponent
  render() {
    console.log("this is class component");
    return <div>ClasspureComponent</div>;
  }
}
