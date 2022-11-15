import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import Card from "../UI/Card";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const mappedCartItems = cartItems.map((item) => {
    return (
      <CartItem
        key={item.id}
        item={{
          id: item.id,
          title: item.name,
          quantity: item.quantity,
          total: item.totalPrice,
          price: item.price,
        }}
      />
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{mappedCartItems}</ul>
    </Card>
  );
};

export default Cart;
