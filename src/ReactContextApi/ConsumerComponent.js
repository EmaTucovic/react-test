import React, { Component } from "react";
import { MyContext } from "./ProviderComponent";
import "./styles.css";

class ConsumerComponent extends Component {
  render() {
    return (
      <div className="ConsumerClass">
        <MyContext.Consumer>
          {val => <div>Consumer1. This is value from context: {val}</div>}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default ConsumerComponent;
