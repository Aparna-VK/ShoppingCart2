import React from "react";

// Product component (is a Stateless component)
export default ({ id, name, price, count, children }) => (
  <li className="product">
    <div className="inline">
      Product: {name} <br />
      Price: {price} <br />
      <br />
      {children}
    </div>
  </li>
);
