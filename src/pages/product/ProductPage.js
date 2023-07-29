import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const [ratingValue, setRatingValue] = useState(2);
  const [product, setProduct] = useState({});

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
  }, []);
  console.log(product, ratingValue);
  return (
    <div className="flex">
      {/* Image section for product */}
      <div className="bg-red-100 p-2 h-[600px] w-[35%] flex items-center justify-center">
        <img src={product.image} className="h-[400px] " />
      </div>
      {/* IDescription section for product */}
      <div className="bg-blue-100 w-[50%] p-2 flex flex-col pl-3">
        <div className="mt-10 text-xl font-bold">{product.title}</div>
        <div className="">
          <Rating name="read-only" value={ratingValue} readOnly />
        </div>
        <div className="mt-5">{product.description}</div>
      </div>
      {/* Price section for product */}
      <div className="bg-green-100 w-[15%]">{product.price}</div>
    </div>
  );
};

export default ProductPage;
