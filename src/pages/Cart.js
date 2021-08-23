import React, { useContext } from "react";
import { data } from "../context/Context";

function Cart() {
  const { cart, removeFromCartById } = useContext(data);
  return (
    <div>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <p>{`${item.subject}----------${item.time}--------${
              item.seats
            }-----${new Date(item.date).toLocaleDateString()}`}</p>
            <button
              onClick={() => {
                removeFromCartById(item.id);
              }}
            >
              Remove from cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
