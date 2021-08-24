import React, { useContext, useEffect, useState } from "react";
import SingleTile from "../components/SingleTile";
import TableHead from "../components/TableHead";
import { data } from "../context/Context";
function Home() {
  const { list, totalSeats } = useContext(data);

  return (
    <>
      <div className="seats">
        <h2>Class Schedule</h2>
        <p>Free Seats Left: {totalSeats}</p>
      </div>
      <div className="home">
        <TableHead />
        {list.map((item, pos) => {
          if (!item) {
            return <React.Fragment key={pos}></React.Fragment>;
          }
          return <SingleTile item={item} pos={pos} key={pos} />;
        })}
      </div>
    </>
  );
}

export default Home;
