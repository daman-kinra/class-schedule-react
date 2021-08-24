import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h2>404 Page not Found</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Error;
