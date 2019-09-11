import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListProduct from "./components/ListProduct";
import Cart from "./components/Cart";
// import Message from "./components/Message";
import "../node_modules/noty/lib/noty.css";
import "../node_modules/noty/lib/noty.js";
import "../node_modules/noty/lib/themes/mint.css";

class App extends Component {
  // MessageShow = params => {
  //   new Noty({
  //     text: "Some notification text",
  //     type: "alert",
  //     timeout: 3000,
  //     theme: "mint",
  //     progressBar: true,
  //     layout: "topRight"
  //   }).show();
  // };
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* Row 1: Menu header */}
          <Header />
          {/* Row 2: List products */}
          <ListProduct />
          {/* Row 3: Cart */}
          <Cart />
          {/* Footer */}
          <Footer />

          {/* <button
            type="button"
            className="btn btn-primary form-control"
            onClick={() => Message("bar","alert")} // true
          >
            sdasdasdsd
          </button> */}
        </div>
      </div>
    );
  }
}

export default App;
