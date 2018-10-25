import React, { Component } from "react";
import MyProvider from "./ProviderComponent";
import ConsumerComponent2 from './ConsumerComponent2';
import ConsumerComponent from './ConsumerComponent';

class ReactContextApi extends Component {
  render() {
    return (
      <div className="ProviderClass">
        <MyProvider>
          <ConsumerComponent />
        </MyProvider>
        <ConsumerComponent2 />
      </div>
    );
  }
}

export default ReactContextApi;
