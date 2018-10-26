import React, { Component } from 'react';
import ReactContextApi from './ReactContextApi/index';
import ReactStaticContext from './ReactStaticContext/index';


class App extends Component {
  render() {
    return (
      <div>
        <ReactStaticContext/>
      </div>
    );
  }
}

export default App;
