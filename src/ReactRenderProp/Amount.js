import React, { Component } from "react";

class Amount extends Component {
  state = { amount: 0 };

  onIncrement = () => {
    this.setState(prevState => ({ amount: prevState.amount + 1 }));
  };

  onDecrement = () => {
    this.setState(prevState => ({ amount: prevState.amount - 1 }));

  };


  // Amount component is render prop component: it implemets this pattern (uses children as function)
  // if we use children as componnet, we talk about component composition
  render() {
    return (
      <div>
        <span>US Dollar: {this.state.amount} </span>

        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        {this.props.children(this.state.amount)}
      </div>
    );
  }
}

export default Amount;
