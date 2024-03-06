import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_CND_URL } from "../constants";
import {clearCart} from "../utils/cartSlice"

const CartItem = ({ imageId, name }) => {
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="h-[250px] w-[250px]"
        src={`${IMAGE_CND_URL}${imageId}`}
        alt="food"
      />
      <h2 className="font-bold text-xl">{name}</h2>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-3xl m-2">Cart Items</h1>
      <button
        className="px-2 rounded-md bg-green-100 m-2"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <CartItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
