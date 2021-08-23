import React, { useContext } from "react";
import { data } from "../context/Context";

function SingleTile({ item, pos, fromCart }) {
  const { addToCart, removeFromCart, removeFromCartById } = useContext(data);
  return (
    <div key={pos} className="tile">
      <div>
        <p>{new Date(item.date).toLocaleDateString()}</p>
      </div>
      <div>
        <p>{item.time}</p>
      </div>
      <div>
        <p>{item.seats} Seats Available</p>
      </div>
      <div>
        {item.seats === 0 ? (
          <button className="full">Full</button>
        ) : (
          <>
            {item.cart ? (
              <button
                onClick={() => {
                  if (fromCart) {
                    removeFromCartById(item.id);
                  } else {
                    removeFromCart(pos, item.id);
                  }
                }}
                className="cancel"
              >
                Cancel
              </button>
            ) : (
              <button
                onClick={() => {
                  addToCart(pos);
                }}
                className="book"
              >
                Book Now
              </button>
            )}
          </>
        )}
      </div>
      {/* <p>{`${item.subject}----------${item.time}--------${
        item.seats
      }-----${new Date(item.date).toLocaleDateString()}`}</p>
      {item.seats === 0 ? (
        <button>Full</button>
      ) : (
        <>
          {item.cart ? (
            <button
              onClick={() => {
                removeFromCart(pos, item.id);
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
      )} */}
    </div>
  );
}

export default SingleTile;
