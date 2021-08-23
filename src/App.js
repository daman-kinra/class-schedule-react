import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Error from "./pages/Error";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <div className="line">
        <hr />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
