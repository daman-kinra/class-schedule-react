import React, { useContext } from "react";
import SingleTile from "../components/SingleTile";
import TableHead from "../components/TableHead";
import { data } from "../context/Context";

function Cart() {
  const { cart } = useContext(data);
  return (
    <div className="home">
      <TableHead />
      {cart.map((item, pos) => {
        return <SingleTile item={item} pos={pos} key={pos} fromCart={true} />;
      })}
    </div>
  );
}

export default Cart;
