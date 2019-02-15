import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/home/index";
import { connect } from "react-redux";
import { cartItemsSelector } from "./core/_selectors";

class App extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className='App'>
        <header className='App-header'>
          <h2>Fortude Shopping Cart</h2>
          {cartItems.length > 0 && (
            <h4>
              (
              {`${cartItems.length} ${(cartItems.length > 1 && "items") ||
                "item"} in Cart`}
              )
            </h4>
          )}
        </header>
        <HomePage />
      </div>
    );
  }
}

App = connect(state => ({
  cartItems: cartItemsSelector(state)
}))(App);

export default App;
