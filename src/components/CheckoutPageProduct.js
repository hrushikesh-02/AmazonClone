import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";

const CheckoutPageProduct = (props) => {
  const dispatch = useDispatch();
  // console.log(props.product);
  return (
    <div className="flex mt-5">
      <div className="w-[20%]">
        <img src={props.product.image} alt="" className="h-[200px] w-[300px]" />
      </div>
      <div className="w-[75%] ml-3">
        <div className="text-xl">{props.product.title}</div>
        <div className="text-xl font-semibold">
          ₹{(props.product.price * 82).toFixed(2)}
        </div>
        <div className="text-xs mt-2">
          rated by over {props.product.ratings} people
        </div>
        <div className="text-green-600 text-xs">In stock</div>
        <div className="flex items-center mt-2">
          <input type="checkbox"></input>
          <span className="text-xs ml-2">This item will be a gift</span>
          <span className="text-amazonclone-link text-xs ml-1">Learn more</span>
        </div>
        <div className="flex gap-3 text-sm mt-5 items-center">
          <div className="bg-stone-300 flex shadow-md  rounded-sm h-full">
            <button
              onClick={() => {
                dispatch(decrementQuantity(props.product.id));
              }}
              className="p-2 flex item-center justify-center border-r border-stone-400"
            >
              -
            </button>
            <div className="p-2 flex item-center justify-center">
              {props.product.quantity}
            </div>
            <button
              onClick={() => {
                dispatch(incrementQuantity(props.product.id));
              }}
              className="p-2 flex item-center justify-center border-l border-stone-400"
            >
              +
            </button>
          </div>
          <div
            className="text-red-600"
            onClick={() => dispatch(removeFromCart(props.product.id))}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPageProduct;
