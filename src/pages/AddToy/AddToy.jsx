import React from "react";
import successToastify from "../../toastifies/success/success";
import failedToastify from "../../toastifies/failedToastify/failed";

const AddToy = () => {
    const handleAddToy = event => {
        event.preventDefault()
        const form = event.target;
        const toyName = form.toyname.value;
        const photoURL = form.photourl.value;
        const sellerName = form.sellername.value;
        const sellerEmail = form.selleremail.value;
        const subCategory = form.subcategory.value;
        const price = form.price.value;
        const ratings = form.rating.value;
        const availableQuantity = form.availablequantity.value;
        const toyDetails = form.details.value;
        const toyInfo = {toyName, photoURL, sellerName, sellerEmail, subCategory, price, ratings, availableQuantity, toyDetails};

        fetch("http://localhost:5000/products", {
            method: 'POST',
            body: JSON.stringify(toyInfo),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(() => successToastify("Toy Added Successfully!"))
        .catch(err => failedToastify(err.message));
    }
  return (
    <div className="space-y-5 py-5">
      <div className="text-center font-francoisOne space-y-5">
        <h2 className="text-4xl">Add Toy</h2>
        <form onSubmit={handleAddToy}>
          <div>
            <div className="card flex-shrink-0 w-full bg-base-100">
              <div className="card-body grid md:grid-cols-2">
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
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Available Quantity"
                    className="input input-bordered"
                    name="availablequantity"
                    required
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
                  ></textarea>
                </div>
                <div className="form-control mt-6 col-span-2">
                  <button className="btn btn-primary">Add Toy</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
