import React, { Component } from "react";
import { MyContext } from "./ProviderComponent";
import "./styles.css";

class ConsumerComponent2 extends Component {
  render() {
    return (
      <div className="ConsumerClass2">
        <MyContext.Consumer>
            {(val) => (<div>Consumer2. This is value from context: {val}</div>)}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default ConsumerComponent2;
