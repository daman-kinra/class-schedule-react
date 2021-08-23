import React, { useContext, useEffect, useState } from "react";
import { data } from "../context/Context";

function Header() {
  const [counter, setCounter] = useState(
    Math.floor(Math.random() * (60 - 30) + 30)
  );
  const { totalSeats } = useContext(data);
  useEffect(() => {
    setInterval(() => {
      setCounter((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(1);
          return prev;
        }
      });
    }, 1000);
  }, []);
  return (
    <div className="header">
      {counter}-{totalSeats}
    </div>
  );
}

export default Header;
