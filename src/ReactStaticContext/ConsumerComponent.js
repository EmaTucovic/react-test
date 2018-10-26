import React, { Component } from "react";
import {MyContext} from "./ProviderComponent";
import "./styles.css";

class ConsumerComponent extends Component {
    static contextType = MyContext;

    componentDidMount(){
        this.setState({ message : this.context});
        console.log(this.context);
    }
  
  render() {
    console.log(this.context, "this.context",);

    return (
      <div className="ConsumerClass">
      </div>
    );
  }
}

export default ConsumerComponent;
