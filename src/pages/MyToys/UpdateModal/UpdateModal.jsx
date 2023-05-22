import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import failedToastify from "../../../toastifies/failedToastify/failed";
import successToastify from "../../../toastifies/success/success";

const UpdateModal = ({ isOpenModal, setIsOpenModal, selProdIDForUpdate, fetchMyProducts}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://speedo-cars-server.up.railway.app/products/${selProdIDForUpdate}`)
      .then((res) => res.json())
      .then((res) => {
        setSelectedProduct(res);
        setLoading(false);
      });
  }, [selProdIDForUpdate]);

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const availableQuantity = form.availablequantity.value;
    const toyDetails = form.details.value;
    const toyInfo = {
      price,
      availableQuantity,
      toyDetails
    };

    fetch(`https://speedo-cars-server.up.railway.app/products/${selProdIDForUpdate}`, {
      method: "PATCH",
      body: JSON.stringify(toyInfo),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(res => {
        console.log(res)
        if(res.modifiedCount){
            successToastify("Toy Updated Successfully!");
            setIsOpenModal(false)
            fetchMyProducts("https://speedo-cars-server.up.railway.app/myproducts");
        }
      })
      .catch((err) => failedToastify(err.message));
  };

  return (
    <div>
      <input type="checkbox" className="modal-toggle" checked={isOpenModal} onChange={() => {}}/>
      <div className="modal">
        <div className="modal-box w-full relative">
          <label
            onClick={() => setIsOpenModal(false)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Update Toy</h3>
          <div className="py-4">
            {loading ? (
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
                {selectedProduct ? (
                  <form onSubmit={handleUpdateToy}>
                    <div>
                      <div className="w-full bg-base-100">
                        <div className="md:grid md:grid-cols-2 gap-3">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Toy Name</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Toy Name"
                              className="input input-bordered"
                              name="toyname"
                              required
                              disabled
                              defaultValue={selectedProduct.toyName}
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Toy PhotoURL</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Toy PhotoURL"
                              className="input input-bordered"
                              name="photourl"
                              required
                              disabled
                              defaultValue={selectedProduct.photoURL}
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Seller Name</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Seller Name"
                              className="input input-bordered"
                              name="sellername"
                              required
                              disabled
                              defaultValue={selectedProduct.sellerName}
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Seller Email</span>
                            </label>
                            <input
                              type="email"
                              placeholder="Enter Seller Email"
                              className="input input-bordered"
                              name="selleremail"
                              required
                              disabled
                              defaultValue={selectedProduct.sellerEmail}
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Sub Category</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Sub Category"
                              className="input input-bordered"
                              name="subcategory"
                              required
                              disabled
                              defaultValue={selectedProduct.subCategory}
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Price</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Price"
                              className="input input-bordered"
                              name="price"
                              required
                              defaultValue={selectedProduct.price}
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Rating</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Rating"
                              className="input input-bordered"
                              name="rating"
                              required
                              disabled
                              defaultValue={selectedProduct.ratings}
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">
                                Available Quantity
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Available Quantity"
                              className="input input-bordered"
                              name="availablequantity"
                              required
                              defaultValue={selectedProduct.availableQuantity}
                            />
                          </div>
                          <div className="form-control col-span-2">
                            <label className="label">
                              <span className="label-text">Toy Details</span>
                            </label>
                            <textarea
                              type="text"
                              placeholder="Enter Toy Details"
                              className="textarea input-bordered"
                              name="details"
                              rows={10}
                              required
                              defaultValue={selectedProduct.toyDetails}
                            ></textarea>
                          </div>
                          <div className="form-control mt-6 col-span-2">
                            <button type="submit" className="btn btn-primary">
                              Update Toy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                ) : (
                  <p>No Product Found</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
