import React, { Component } from "react";

// HOC is wrapper component that modifies some other comp
// Higher order function is a function that makes this possible, receive one component and return another (that one modified)

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

const currencyWithAmount = currencyComponents => {
  class Amount extends Component {
    state = { amount: 0 };

    onIncrement = () => {
      this.setState(prevState => ({ amount: prevState.amount + 1 }));
    };

    onDecrement = () => {
      this.setState(prevState => ({ amount: prevState.amount - 1 }));
    };

    render() {
      return (
        <div>
          <h1>Higher order component</h1>
          <span>US Dollar: {this.state.amount} </span>

          <button type="button" onClick={this.onIncrement}>
            +
          </button>
          <button type="button" onClick={this.onDecrement}>
            -
          </button>
          {currencyComponents.map(CurrencyComponent => (
            <CurrencyComponent amount={this.state.amount} />
          ))}
        </div>
      );
    }
  }

  return Amount;
};

const CurrenciesWithAmount = currencyWithAmount([Euro, Pound]);

class HigherOrderComponentTest extends Component {
  state = {};

  render() {
    return <CurrenciesWithAmount />;
  }
}

export default HigherOrderComponentTest;
