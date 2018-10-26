import React, { Component } from "react";
import Amount from "./Amount";

// Child as a function or render prop pattern

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

class ReactRenderProp extends Component {
  render() {
    return (
      <div>
        <h1>Currency Converter</h1>{" "}
        <Amount>
          {(amount) => (
            <div>
              <Pound amount={amount} />
              <Euro amount={amount} />{" "}
            </div>
          )}
        </Amount>
      </div>
    );
  }
}

export default ReactRenderProp;
