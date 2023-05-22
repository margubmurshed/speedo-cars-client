import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import ReactStarsRating from "react-awesome-stars-rating";
import { Link } from "react-router-dom";

const CategoryTabs = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all items");
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([]);
  const [selCatProdsLoading, setSelCatProdsLoading] = useState(true);
  const [selCatLoading, setSelCatLoading] = useState(true);

  useEffect(() => {
    fetch("https://speedo-cars-server.up.railway.app/subcategories")
      .then((res) => res.json())
      .then((res) => {
        setSubCategories(res);
        setSelCatLoading(false);
      });
  }, []);

  useEffect(() => {
    setSelCatProdsLoading(true);
    const url =
      selectedCategory === "all items"
        ? "https://speedo-cars-server.up.railway.app/products"
        : `https://speedo-cars-server.up.railway.app/products?subCategory=${selectedCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setSelectedCategoryProducts(res);
        setSelCatProdsLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div>
      <h2 className="text-center text-4xl font-francoisOne">
        Shop By Category
      </h2>
      <div className="flex flex-wrap justify-center gap-3 mt-5">
        {selCatLoading ? (
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
        ) : (
          <>
            <button
              className={`font-francoisOne border rounded-full px-5 py-2 text-xs md:text-base ${
                "all items" === selectedCategory
                  ? "text-white bg-speedo-primary border-speedo-primary"
                  : "text-gray-500 border-gray-400 bg-transparent"
              }`}
              onClick={() => setSelectedCategory("all items")}
            >
              All Items
            </button>
            {subCategories.map((sc) => (
              <button
                key={sc}
                className={`font-francoisOne border rounded-full px-5 py-2 text-xs md:text-base ${
                  sc.toLowerCase() === selectedCategory
                    ? "text-white bg-speedo-primary border-speedo-primary"
                    : "text-gray-500 border-gray-400 bg-transparent"
                }`}
                onClick={() => setSelectedCategory(sc.toLowerCase())}
              >
                {sc}
              </button>
            ))}
          </>
        )}
      </div>
      {!selCatLoading && (
        <>
          {selCatProdsLoading ? (
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
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
              {selectedCategoryProducts.map(
                ({ _id, toyName, photoURL, price, ratings }) => (
                  <div className="border p-5 rounded-md" key={_id}>
                    <img src={photoURL} alt={toyName} />
                    <div className="text-center space-y-2 mt-5">
                      <h3 className="font-francoisOne text-xl">{toyName}</h3>
                      <p className="text-speedo-primary font-bold">${price}</p>
                      <div className="flex justify-center">
                        <ReactStarsRating
                          className="flex"
                          value={ratings}
                          size={20}
                        />
                      </div>
                      <div className="pt-5">
                        <Link
                          to={`/toy/${_id}`}
                          className="btn w-full bg-speedo-primary border-speedo-primary"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CategoryTabs;
