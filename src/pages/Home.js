import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { data } from "../context/Context";
function Home() {
  const { list, addToCart, removeFromCart } = useContext(data);
  return (
    <div>
      <Header />
      {list.map((day, pos) => {
        if (!day) {
          return <React.Fragment key={pos}></React.Fragment>;
        }
        return (
          <div key={pos}>
            <p>{`${day.subject}----------${day.time}--------${
              day.seats
            }-----${new Date(day.date).toLocaleDateString()}`}</p>
            {day.seats === 0 ? (
              <button>Full</button>
            ) : (
              <>
                {day.cart ? (
                  <button
                    onClick={() => {
                      removeFromCart(pos, day.id);
                    }}
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      addToCart(pos);
                    }}
                  >
                    Book
                  </button>
                )}
              </>
            )}
          </div>
        );
      })}
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Home;
