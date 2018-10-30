import React, { Component } from "react";

class Mouse extends Component {
  state = { x: 0, y: 0 };

  handleMouseMove = event => {
    console.log("mouse move", event.clientX, event.clientY);
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div style={{ height: "100vh", border:"1px dashed blue" }} onMouseMove={this.handleMouseMove}>
        {this.props.renderPosition(this.state)}
      </div>
    );
  }
}

export default Mouse;
