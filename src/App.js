import React, { Component } from "react";
import ReactRefsTestig from './ReactRefs';
import ReactHooksComponent from './ReactHooks';

import {array} from "test-lib-utils";
import * as lib from "@emilyt/webpack-lib"
import ReactStaticContext from './ReactStaticContext/index';
class App extends Component {

  render() {
    let arr = [1,2,3];
    console.log(lib);
    let last  = array.getLast(arr);
    return (
      <div>
        hi {last}
        <lib.Hello />
        <ReactStaticContext />
      </div>
    );
  }
}

export default App;


