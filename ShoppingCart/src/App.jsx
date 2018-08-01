import React, { Component } from "react";
import { pages } from "./Constants";
import ProductList from "./Components/ProductList";
import CartList from "./Components/CartList";
import Button from "./Components/Button";
import { getProducts, findProductById } from "./api";

// App Component (is a stateful component)
export default class App extends Component {
  constructor(props) {
    super(props);
    // Sets the initial state.
    this.state = {
      currentPage: pages.PRODUCT_LIST, // Initial page is PRODUCT_LIST
      isLoading: true, // Should show loading until the products are loaded.
      products: [], // Initially the products list is empty
      cart: [] // Initially the cart list is empty
    };
  }

  /**
   * componentDidMount is a React lifecycle method
   * that would be called immediately after the component is
   * mounted in the DOM.
   * Should make all the asynchronous or side effect casusing calls
   * from here.
   * Since we are using `await` inside this method
   * `async` is needed in front of this method signature.
   */
  async componentDidMount() {
    // Get the products this is an async function
    // returns a Promise
    const products = await getProducts();
    // Sets the products and isLoading to false
    this.setState({ products, isLoading: false });
  }

  /**
   * Sets the currentPage as CART_LIST
   */
  goToCart = () => {
    this.setState({
      currentPage: pages.CART_LIST
    });
  };

  /**
   * Sets the currentPage as PRODUCT_LIST
   */
  goToCatalog = () => {
    this.setState({
      currentPage: pages.PRODUCT_LIST
    });
  };

  /**
   * Add product to the cart list
   */
  addToCart = productId => {
    const { cart } = this.state;
    const product = findProductById(productId);
    product.count++;
    if (cart.includes(product)) {
      this.setState({});
    } else {
      this.setState({
        cart: [...cart, product]
      });
    }
  };

  decrementCount = productId => {
    const product = findProductById(productId);
    const { cart } = this.state;
    if (product.count > 0) {
      product.count--;
    }
    if (product.count === 0) {
      var index = cart.indexOf(product);
      console.log(index);
      cart.splice(index, 1);
      this.setState({ cart: [...cart] });
    } else {
      this.setState({});
    }
  };

  removeFromCart = productId => {
    const product = findProductById(productId);
    product.count = 0;
    const { cart } = this.state;
    var index = cart.indexOf(product);
    cart.splice(index, 1);
    this.setState({ cart: [...cart] });
  };

  changeCount = productId => {
    const product = findProductById(productId);
    const { cart } = this.state;
    var newCount = document.getElementById(productId).value;

    var number = document.getElementById(productId);

    // Confirm only valid numbers are entered in the input field.
    number.onkeydown = function(e) {
      if (
        !(
          (e.keyCode > 95 && e.keyCode < 106) ||
          (e.keyCode > 47 && e.keyCode < 58) ||
          e.keyCode === 8
        )
      ) {
        return false;
      }
    };
    product.count = newCount;

    if (newCount === "0") {
      var index = cart.indexOf(product);
      console.log(index);
      cart.splice(index, 1);
      this.setState({ cart: [...cart] });
    } else {
      this.setState({});
    }
  };

  render() {
    const { isLoading, currentPage, cart, products } = this.state;

    if (isLoading) {
      return <div className="loading">Loading...</div>;
    }

    const listing =
      currentPage === pages.PRODUCT_LIST ? (
        <ProductList products={products} addToCart={this.addToCart} />
      ) : (
        <CartList
          cart={cart}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          decrementCount={this.decrementCount}
          changeCount={this.changeCount}
        />
      );

    let navBtnMsg, navBtnFn;
    if (currentPage === pages.PRODUCT_LIST) {
      navBtnMsg = `Cart(${cart.length})`;
      navBtnFn = this.goToCart;
    } else {
      navBtnMsg = "Back";
      navBtnFn = this.goToCatalog;
    }

    return (
      <div>
        <Button
          className="goto-cart-btn"
          onClick={navBtnFn}
          message={navBtnMsg}
        />
        {listing}
      </div>
    );
  }
}
