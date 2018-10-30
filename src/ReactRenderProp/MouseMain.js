import React, { Component } from "react";
import Mouse from "./Mouse";

class MouseMain extends Component {
  render() {
    return (
      <div>
        <Mouse
          renderPosition={({ x, y }) => {
            return (
              <div>
                <div
                  style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    border: "1px solid orange"
                  }}
                >
                  <span>Mouse</span>

                  <span>x: {x}, </span>
                  <span>y: {y}</span>
                </div>

                <div
                  style={{
                    position: "absolute",
                    left: x + 25,
                    top: y + 25,
                    border: "1px solid blue"
                  }}
                >
                  <span>Cat </span>
                  <span>x: {x + 25}, </span>
                  <span>y: {y + 25}</span>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default MouseMain;
