import React, { Component } from "react";
import ProviderComponent from "./ProviderComponent";
import ConsumerComponent from './ConsumerComponent';

class ReactContextApi extends Component {

  render() {
    return (
      <div className="ProviderClass">
        <ProviderComponent>
          <ConsumerComponent />
        </ProviderComponent>
      </div>
    );
  }
}

export default ReactContextApi;
