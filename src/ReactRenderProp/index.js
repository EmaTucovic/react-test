import React, { Component } from "react";
import Amount from "./Amount";

// Child as a function or render prop pattern

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

class ReactRenderProp extends Component {
  render() {

    // Instad of children pass a render prop that receive some arg from Amount component
    return (
      <div>
        <h1>Currency Converter</h1>{" "}
        <Amount
          renderValutes={amount => (
            <div>
              <Pound amount={amount} />
              <Euro amount={amount} />{" "}
            </div>
          )}
        />
      </div>
    );
  }
}

export default ReactRenderProp;
