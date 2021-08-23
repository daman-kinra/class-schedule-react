import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const data = createContext();
const days = 10;
const randomZeros = 4;
export function Context(props) {
  const [counter, setCounter] = useState(
    Math.floor(Math.random() * (60 - 30) + 30)
  );
  const [classes] = useState({
    Sunday: null,
    Monday: {
      subject: "Python",
      time: "4pm - 5pm",
      cart: false,
    },
    Tuesday: null,
    Wednesday: {
      subject: "Java",
      time: "5pm - 6pm",
      cart: false,
    },
    Thursday: null,
    Friday: {
      subject: "HTML",
      time: "9am - 10am",
      cart: false,
    },
    Saturday: {
      subject: "HTML",
      time: "9am - 10am",
      cart: false,
    },
  });
  const [daysArray] = useState([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalSeats, setTotalSeats] = useState(0);
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < days; i++) {
      const obj = classes[
        `${daysArray[new Date(new Date().getTime() + 86400000 * i).getDay()]}`
      ]
        ? {
            ...classes[
              `${
                daysArray[
                  new Date(new Date().getTime() + 86400000 * i).getDay()
                ]
              }`
            ],
            id: uuidv4(),
            date: new Date(new Date().getTime() + 86400000 * i).getTime(),
            seats: Math.floor(Math.random() * (15 - 5) + 5),
          }
        : null;
      arr.push(obj);
    }
    for (let i = 0; i < randomZeros; i++) {
      const random = Math.floor(Math.random() * days);
      if (arr[random]) {
        arr[random] = {
          ...arr[random],
          seats: 0,
        };
      }
    }
    let total = 0;
    arr.forEach((item) => {
      if (item) {
        total += item.seats;
      }
    });
    setTotalSeats(total);
    setList(arr);

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

  const addToCart = (index) => {
    if (cart.length >= 3) {
      alert("cart full");
      return;
    }
    const arr = list;
    arr[index] = {
      ...arr[index],
      cart: true,
      seats: arr[index].seats - 1,
    };
    setCart((prev) => [...prev, arr[index]]);
    setTotalSeats((prev) => prev - 1);
    setList(arr);
  };
  const removeFromCart = (index, id) => {
    const arr = [...list];
    arr[index] = { ...arr[index], cart: false, seats: arr[index].seats + 1 };
    setCart((prev) => prev.filter((item) => item.id !== id));
    setTotalSeats((prev) => prev + 1);
    setList(arr);
  };
  const removeFromCartById = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    setTotalSeats((prev) => prev + 1);
    setList((prev) => {
      const arr = prev.map((item) => {
        if (!item) {
          return null;
        }
        if (item.id === id) {
          return { ...item, cart: false, seats: item.seats + 1 };
        }
        return item;
      });
      return arr;
    });
  };
  return (
    <data.Provider
      value={{
        list,
        addToCart,
        removeFromCart,
        cart,
        removeFromCartById,
        totalSeats,
        counter,
      }}
    >
      {props.children}
    </data.Provider>
  );
}
