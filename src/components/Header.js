import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { data } from "../context/Context";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const { counter, cart } = useContext(data);

  return (
    <div className="header">
      <div className="left">
        <p>Time Left {counter} seconds</p>
        <h1>Claim Your Free Trial Class</h1>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/cart">
          <div className="cart-box">
            <AiOutlineShoppingCart style={{ height: "2rem", width: "2rem" }} />
            <p>{cart.length}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
