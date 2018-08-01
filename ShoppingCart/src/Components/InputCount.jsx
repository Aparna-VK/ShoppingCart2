import React from "react";

// Button component (is a Stateless component)
export default ({ onChange, value, id }) => (
  <input type="number" min="0" onChange={onChange} id={id} value={value} />
);
