import React, { Component } from 'react';
import "./styles.css";

export const MyContext = React.createContext("default context value");

class MyProvider extends Component{

    render(){
        return (
            <div className = "ProviderClass">
                <div>Provider</div>
                <MyContext.Provider value = "test value from provider">
                    {this.props.children}
                </MyContext.Provider>
            </div>
        )
    }
}

export default MyProvider;