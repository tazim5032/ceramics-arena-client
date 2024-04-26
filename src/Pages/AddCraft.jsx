import Swal from "sweetalert2";

const AddCraft = () => {

    const handleAddProduct = e => {
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
        const username = form.username.value;
        const email = form.email.value;

        const info = {
            name, subcategory, description, price,
            rating, time, customization, stockStatus, photo, username, email
        };

        fetch('http://localhost:5000/addcraft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info) //data gula k stringfy kore server e pathaitece
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Item Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className="bg-[#FAF3E0] p-2 sm:p-24 sm:pt-8">
            <h1 className="text-3xl font-bold text-center mb-8">Add Craft Item</h1>

            <form onSubmit={handleAddProduct} >
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Item Name"
                                className="input input-bordered w-full" required/>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory" placeholder="Subcategory Name"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Short Description"
                                className="input input-bordered w-full" required/>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" placeholder="Price"
                                className="input input-bordered w-full" step="any" required />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" placeholder="Rating"
                                className="input input-bordered w-full" step="any"
                                min="0" max="5" required/>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Processing Time in Days</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="time" placeholder="Processing Time"
                                className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <div className="input-group">
                            <select name="customization" className="select select-bordered w-full">
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
                            <select name="stockStatus" className="select select-bordered w-full">
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
                            <input type="text" name="photo" placeholder="Photo URL"
                                className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="username" placeholder="User Name"
                                className="input input-bordered w-full" required/>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="User Email"
                                className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>




                <input className="btn btn-block bg-black text-white"
                    type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddCraft;