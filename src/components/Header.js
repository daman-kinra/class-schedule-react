import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../context/Context";

function Header() {
  const { counter } = useContext(data);

  return (
    <div className="header">
      <div className="left">
        <p>Time Left {counter} seconds</p>
        <h1>Claim Your Free Trial Class</h1>
      </div>
      <div className="right">
        <Link to="/cart">Cart</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Header;
