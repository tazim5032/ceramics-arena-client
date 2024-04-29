import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
//import UseAuth from "../Hook/UseAuth";
//import UseAuth from "../Hook/UseAuth";


const Update = () => {

    const { id } = useParams();
    //console.log('is is ', id);

    const [product, setProduct] = useState({});

    useEffect(() => {

        fetch(`http://localhost:5000/updateProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                //console.log(data)
            })

    }, [id]);

    //find already set customization bcz defaultValue is not working
    useEffect(() => {
        // Select the option based on product.customization after the component mounts
        const selectElement = document.getElementById("customizationSelect");
        if (selectElement) {
            selectElement.value = product.customization;
        }
    }, [product.customization]);

    //find already set stock status bcz defaultValue is not working
    useEffect(() => {

        const selectElement = document.getElementById("stockStatusSelect");
        if (selectElement) {
            selectElement.value = product.stockStatus;
        }
    }, [product.stockStatus]);

    // console.log('product is ',product);

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const time = form.time.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const photo = form.photo.value;

        const info = {
            name, subcategory, description, price,
            rating, time, customization, stockStatus, photo
        };

        fetch(`http://localhost:5000/updateProduct/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Item Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })

    }

    return (
        <div className="bg-[#FAF3E0] p-2 sm:p-24 sm:pt-0">
            <Helmet>
                <title>Update</title>
            </Helmet>

            <h1 className="text-2xl text-center pt-6">Update Product</h1>

            <form onSubmit={handleUpdate} >
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={product.name}
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>


                        <div className="input-group">
                            <select name="subcategory" className="select select-bordered w-full"
                                defaultValue={product.subcategory}>
                                <option value="clay">Clay-made pottery</option>
                                <option value="stoneware">Stoneware</option>
                                <option value="porcelain">Porcelain</option>
                                <option value="terra">Terra Cotta</option>
                                <option value="ceramics">Ceramics & Architectural</option>
                                <option value="home">Home decor pottery</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={product.description}
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" defaultValue={product.price}
                                className="input input-bordered w-full" step="any" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" defaultValue={product.rating}
                                className="input input-bordered w-full" step="any"
                                min="0" max="5" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Processing Time in Days</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="time" defaultValue={product.time}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <div className="input-group">
                            <select
                                id="customizationSelect"
                                name="customization"
                                className="select select-bordered w-full"
                            >
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <div className="input-group">
                            <select
                                id="stockStatusSelect" 
                                name="stockStatus"
                                className="select select-bordered w-full"
                            >
                                <option value="inStock">In stock</option>
                                <option value="madeToOrder">Made to order</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={product.photo}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>






                <input className="btn btn-block bg-black text-white"
                    type="submit" value="Add" />
            </form>

        </div>
    );
};

export default Update;