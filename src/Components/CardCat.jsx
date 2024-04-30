import { useState } from "react";
import { IoPricetagsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CardCat = ({ item, items, setItems }) => {
    const { _id, name, subcategory, description, price, rating, time, stockStatus, photo } = item;

    const handleDelete = id => {
        fetch(`https://ceramic-arena-server.vercel.app/delete/${id}`, {
            //mode: 'no-cors',
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Item has been deleted!",
                        icon: "success"
                    });

                    const remaining = items.filter(cof => cof._id != _id);
                    setItems(remaining);
                }
            });
    };

    return (
        <div className="w-full max-w-xs mx-auto">
            <div className="shadow-lg rounded-lg overflow-hidden h-full border-2">
                <img className="w-full h-48 object-cover object-center" src={photo} alt={name} />
                <div className="py-4 px-6">
                    <h2 className="text-xl font-semibold ">{name}</h2>
                    <p className="text-sm font-bold py-2">{subcategory}</p>
                    <p className="text-sm ">{description}</p>
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                            <span className="text-sm  mr-2">
                                Price: ${price}
                            </span>
                            <span className="text-xs ">
                                Rating: {rating}
                            </span>
                        </div>
                        <span className={`text-xs font-semibold px-2 py-1 uppercase rounded`}>
                            {stockStatus}
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="text-xs ">Processing Time: {time} days</span>
                    </div>
                </div>

                <div className="px-6 flex justify-between items-end pb-4">
                    <Link to={`/details/${_id}`} className="text-sm text-gray-600 hover:text-gray-900">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            View Details
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CardCat;
