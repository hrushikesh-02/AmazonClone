import React from "react";
import { useSelector } from "react-redux";
import CheckoutPageProduct from "../../components/CheckoutPageProduct";

const CheckoutPage = () => {
  const purchasedProducts = useSelector((state) => state.cart.products);
  const productsCount = useSelector((state) => state.cart.productsNumber);
  let sum = 0;
  const SubTotal = purchasedProducts.map(
    (product) => (sum += product.price * product.quantity)
  );
  // console.log(purchasedProducts);
  return (
    <div className="bg-amazonclone-background  p-3 flex justify-evenly">
      <div className="bg-white w-[70%] rounded p-2 mt-10">
        <div className="text-3xl border-b-2 w-[100%] pb-5 pt-5">
          Shopping Cart
        </div>
        {purchasedProducts.map((product) => {
          return <CheckoutPageProduct product={product} />;
        })}
        {productsCount <= 0 ? (
          <div className="text-xl p-5 ">
            Your Amazon Cart is empty.
            <div className="text-sm mt-3">
              Check your Saved for later items below or continue shopping.
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="text-xl mt-3 border-t-2 flex justify-between">
          <div></div>
          <div className="mt-1 mb-3">
            Subtotal: ({productsCount}{" "}
            {productsCount > 1 ? <>items</> : <>items</>} : ₹
            {(SubTotal * 82).toFixed(2)})
          </div>
        </div>
      </div>
      <div className="bg-white w-[25%] rounded p-5 mt-10 flex flex-col h-fit">
        <div className="mt-5 text-2xl">
          {SubTotal > 500 ? <p></p> : <p></p>}
        </div>
        <div className="text">
          Subtotal ({productsCount}{" "}
          {productsCount > 1 ? <>items</> : <>items</>} : ₹
          {(SubTotal * 82).toFixed(2)})
        </div>
        <div className="">
          <button className="text-sm w-[100%] bg-[#f7ca00] rounded-xl mt-5 p-3 pt-2 pb-2">
            Proceed to Buy
          </button>
        </div>
        <div className="w-full mt-5 p-3 rounded border-2 flex items-center justify-center">
          <select className="w-full flex items-center justify-center text-center">
            <option className="bg-red-100">EMI Available</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
