import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import axios from "axios";
import OffersCard from "../../components/OffersCard";

const ProductPage = () => {
  const { id } = useParams();
  const [ratingValue, setRatingValue] = useState(1);
  const [product, setProduct] = useState({});
  let dateObj = new Date();
  let day = String(dateObj.getDate()).padStart(2, "0");
  const [offersList, setOffersList] = useState([
    {
      title: "No Cost EMI",
      description:
        "No Cost EMI  Upto ₹89.99 EMI interest savings on Amazon Pay ICICI Bank Credit CardsUpto ₹89.99 EMI interest savings on Amazon Pay ICICI",
    },
    {
      title: "Partner Offers",
      description: "Get up to 6 Months of Free Spotify Premium Subscrip",
    },
    {
      title: "Cashback",
      description: "₹100 cashback & ₹500 welcome rewards on Amazo",
    },
    {
      title: "Bank Offers",
      description: "Upto ₹1,750.00 discount on select Credit Cards, HDF",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/Product.json");
        const jsonData = Object.values(response.data);
        setProduct(jsonData[id]);
        setRatingValue(product.avgRating);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [ratingValue]);

  const discount = (
    ((product.oldPrice - product.price) / product.oldPrice) *
    100
  ).toFixed(2);

  return (
    <div className="flex">
      {/* Image section for product */}
      <div className=" p-2 h-[600px] w-[35%] flex items-center justify-center">
        <img src={product.image} className="h-[400px] " alt="" />
      </div>
      {/* IDescription section for product */}
      <div className=" w-[50%] p-2 flex flex-col">
        <div className="mt-10 text-xl font-bold">{product.title}</div>
        <div className="border-b-2 pb-2">
          <span className="mr-2">{product.avgRating}</span>
          <Rating
            size="small"
            defaultValue={2.5}
            value={ratingValue ?? 0}
            readOnly
            className="mt-2"
          />
          <span className="ml-4">{product.ratings} ratings</span>
        </div>
        <div className="mt-5">
          <div className="">
            <span className="text-red-500  text-2xl mr-5">{discount}%</span>
            <span className=" text-2xl ">₹{product.price * 82}</span>
          </div>
          <div className="text-xs mt-2">
            M.R.P <span className="line-through ">{product.oldPrice * 82}</span>
          </div>
          <div className="text-sm mt-5">
            <p>Inclusive of all taxes</p>
            <p className="text-amazonclone-link font-semibold">
              Save up to 15% with business pricing and GST input tax credit.
              Sign up for a free Amazon Business account
            </p>
          </div>
          <div className="text-sm mt-5 font-semibold">
            EMI starts at ₹{((product.price * 82) / 12).toFixed(2)}. No Cost EMI
            available.
          </div>
        </div>
        <div className="mt-10 border-t-2 border-b-2 ">
          <div className="p-2 flex gap-3 overflow-x-scroll no-scrollbar">
            {offersList.map((offer, ind) => {
              return (
                <OffersCard
                  key={ind}
                  title={offer.title}
                  description={offer.description}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-5">
          <h1 className="underline ">About this item</h1>
          <p>{product.description}</p>
        </div>
      </div>

      {/* Price section for product */}
      <div className=" w-[15%]  rounded flex flex-col items-center">
        <div className=" w-[90%] p-3 border-2 mt-12 rounded flex flex-col">
          <div className="w-[100%] text-2xl">₹{product.price * 82}</div>
          <div>
            <span className="text-amazonclone-link">Free delivery </span>
            <span>
              {day}-{day * 1 + 2}
            </span>
          </div>
          <div className="mt-3">Deliver to location</div>
          <div className="mt-6">
            <p className="">
              Sold by
              <span className="text-amazonclone-link">
                {product.brand} and Fulfilled by Amazon
              </span>
            </p>
          </div>
          <div className="flex flex-col mt-2">
            <button className="rounded-full border-1 bg-amazonclone-yellow p-2">
              Add to Cart
            </button>
            <button className="rounded-full border-1 bg-[#fa8900] p-2 mt-2">
              Buy Now
            </button>
          </div>
          <div className="mt-3 ml-1 text-amazonclone-link">
            Secure Transcation
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
