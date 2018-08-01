import React from "react";
import AddToCartButton from "./Button";
import DecrementCountButton from "./Button";
import RemoveFromCartButton from "./Button";
import Cart from "./Cart";
import InputField from "./InputCount";

export default ({
  cart,
  addToCart,
  decrementCount,
  removeFromCart,
  changeCount
}) => (
  <React.Fragment>
    <h2>Cart List</h2>
    <ul>
      {cart.map(product => (
        <Cart key={product.id} {...product}>
          <AddToCartButton
            onClick={addToCart.bind(null, product.id)}
            message="+"
          />

          <InputField
            onChange={changeCount.bind(null, product.id)}
            value={product.count}
            id={product.id}
          />

          <DecrementCountButton
            onClick={decrementCount.bind(null, product.id)}
            message="-"
          />

          <RemoveFromCartButton
            onClick={removeFromCart.bind(null, product.id)}
            message="remove"
          />
        </Cart>
      ))}
    </ul>

    <div>
      <span>Subtotal: </span>
      <strong>
        {cart
          .reduce((subTotal, { price, count }) => subTotal + price * count, 0.0)
          .toFixed(2)}
      </strong>
    </div>
  </React.Fragment>
);
