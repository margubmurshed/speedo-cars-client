import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    fetch("https://speedo-cars-server.vercel.app/products?limit=20")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchLoading(true);
    const searchValue = event.target.searchField.value;
    console.log(searchValue);
    fetch(`https://speedo-cars-server.vercel.app/search?q=${searchValue}`)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        setSearchLoading(false);
      });
  };

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

  return (
    <div className="space-y-5 py-5">
      <Helmet>
        <title>Speedo Cars | All Toys</title>
      </Helmet>
      <div className="text-center font-francoisOne space-y-5">
        <h2 className="text-4xl">All Toys</h2>
        <form
          className="flex flex-wrap gap-3 justify-center"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Seach by product name"
            className="input input-bordered w-full max-w-xs"
            name="searchField"
            required
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
      <div>
        {searchLoading ? (
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
          <>
            {products.length ? (
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full z-0">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Seller</th>
                      <th>Toy Name</th>
                      <th>Sub Category</th>
                      <th>Price</th>
                      <th>Available Quantity</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(
                      (
                        {
                          _id,
                          sellerName,
                          toyName,
                          subCategory,
                          price,
                          availableQuantity,
                        },
                        index
                      ) => (
                        <tr key={_id}>
                          <td>{index + 1}</td>
                          <td>{sellerName}</td>
                          <td>{toyName}</td>
                          <td>{subCategory}</td>
                          <td>{price}</td>
                          <td>
                            {parseInt(availableQuantity) || (
                              <span className="text-speedo-primary text-bold">
                                Out of Stock
                              </span>
                            )}
                          </td>
                          <td>
                            <Link
                              to={`/toy/${_id}`}
                              className="btn bg-speedo-primary border-speedo-primary"
                            >
                              View Details
                            </Link>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center font-francoisOne py-10">
                No Products Found
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllToys;
