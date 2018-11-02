import React, { Component } from "react";

class ReactRefsTestig extends Component {
  state = {};
  textInputRef = React.createRef();

  focusTextInput = () => {
    // Note: we're accessing "current" to get the DOM node
    this.textInputRef.current.focus();
    console.log(this.textInputRef);
  };

  focusTextInput2 = (event) => {
      console.log(this.textInputRef2, event);
  };

  logText = e => {
    // to tell our browser that we are dealing with the submit button being clicked
    // and we don't want this event to "bubble up" (that is, be handled by the browser outside of this code).
    e.preventDefault();
    console.log(this.textInputRef.current.value);
  };

  render() {
    return (
      <div>
        <div>
          <input ref={this.textInputRef} />
          <button onClick={this.focusTextInput}>Focus the text input</button>
          <button onClick={this.logText}>Log text to console</button>
        </div>
        <div>
          <input ref={ (element) => { this.textInputRef2 = element; }} />
          <button onClick={(event) => this.focusTextInput2(event)}>Focus the text input</button>
        </div>

      </div>
    );
  }
}

export default ReactRefsTestig;
