import React, { useContext, useEffect, useRef, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { RiPencilFill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import failedToastify from "../../toastifies/failedToastify/failed";
import UpdateModal from "./UpdateModal/UpdateModal";
import { Helmet } from "react-helmet";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selProdIDForUpdate, setSelProdIDForUpdate] = useState("");

  const fetchMyProducts = (url) => {
    setLoading(true);
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ userEmail: user.email }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMyProducts("https://speedo-cars-server.onrender.com/myproducts");
  }, []);

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://speedo-cars-server.onrender.com/products/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((res) => {
            if (res.deletedCount) {
              const remaining = products.filter((pd) => pd._id !== id);
              setProducts(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((err) => failedToastify(err.message));
      }
    });
  };

  const handleEditBtnClick = (id) => {
    setSelProdIDForUpdate(id);
    setIsOpenModal(true);
  };

  const handleSelectOrder = (value) => {
    if(value === "ascending"){
      fetchMyProducts("https://speedo-cars-server.onrender.com/myproducts?sort=1");
    } else{
      fetchMyProducts("https://speedo-cars-server.onrender.com/myproducts?sort=-1");
    }
  }

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
    <>
      <Helmet>
        <title>Speedo Cars | My Toys</title>
      </Helmet>
      <div className="space-y-5 py-5">
        <div className="text-center font-francoisOne space-y-5">
          <h2 className="text-4xl">My Toys</h2>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-francoisOne">Order : </span>
          <div className="flex flex-wrap gap-3">
          <button className="btn text-xs md:text-base" onClick={() => handleSelectOrder('ascending')}>Price (Low to High)</button>
          <button className="btn text-xs md:text-base" onClick={() => handleSelectOrder('descending')}>Price (High to Low)</button>
          </div>
        </div>
        <div>
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
                        <td className="flex gap-3">
                          <button
                            className="w-10 h-10 rounded-full bg-speedo-primary text-white flex justify-center items-center"
                            onClick={() => handleEditBtnClick(_id)}
                          >
                            <RiPencilFill size={20} />
                          </button>
                          <button
                            className="w-10 h-10 rounded-full bg-speedo-primary text-white flex justify-center items-center"
                            onClick={() => handleDeleteProduct(_id)}
                          >
                            <FaTrashAlt size={20} />
                          </button>
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
        </div>
      </div>
      <UpdateModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        selProdIDForUpdate={selProdIDForUpdate}
        fetchMyProducts={fetchMyProducts}
      />
    </>
  );
};

export default MyToys;
