import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";
import { Helmet } from "react-helmet";

const ToyDetails = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://speedo-cars-server.onrender.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        console.log(product)
        setSelectedProduct(product);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#d8413c"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );

  if (!selectedProduct)
    return (
      <div className="flex justify-center items-center h-96">
        <p className="font-bold text-2xl text-gray-400">No Product Found</p>
      </div>
    );

  return (
    <div className="grid md:grid-cols-2 gap-5 md:p-5">
      <Helmet>
        <title>Speedo Cars | Toy Details</title>
      </Helmet>
      <img src={selectedProduct.photoURL} alt={selectedProduct.toyName} className="order-2 w-full"/>
      <div className="font-francoisOne font-thin space-y-5 order-1">
        <h2 className="text-3xl">{selectedProduct.toyName}</h2>
        <p className="text-3xl">${selectedProduct.price}</p>
        <p className="text-lg">
          Sub Category :
          <span className="text-speedo-primary">
            {selectedProduct.subCategory}
          </span>
        </p>
        <p className="text-lg">
          Stock Available :{" "}
          <span
            className={
              parseInt(selectedProduct.availableQuantity)
                ? "text-green-600"
                : "text-red-600"
            }
          >
            {parseInt(selectedProduct.availableQuantity) || "Out of Stock"}
          </span>
        </p>
        <p className="font-sans text-xl">{selectedProduct.toyDetails}</p>
        <div className="flex gap-3">
        <ReactStarsRating className="flex" value={selectedProduct.ratings} size={20} />
        <span>{selectedProduct.ratings} Stars</span>
        </div>
        <div>
          <p>Seller name : {selectedProduct.sellerName}</p>
          <p>Seller Email: {selectedProduct.sellerEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
