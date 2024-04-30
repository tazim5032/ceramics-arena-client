import { useEffect, useRef, useState } from "react";
import { IoPricetagsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Card = ({ item, items, setItems }) => {
    const { _id, name, subcategory, customization, price, time, rating, stockStatus, photo } = item;



    const handleDelete = id => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://ceramic-arena-server.vercel.app/delete/${id}`, {
                   // mode: 'no-cors',
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Craft item has been deleted!",
                                icon: "success"
                            });

                            const remaining = items.filter(cof => cof._id != _id);
                            setItems(remaining);
                        }
                    });


            }
        });
    };

    return (
        <div className="w-full max-w-xs mx-auto" >
            <div className="shadow-lg rounded-lg overflow-hidden h-full border-2">
                <img className="w-full h-48 object-cover object-center" src={photo} alt={name} />

                <div className="py-4 px-6">
                    <h2 className="text-xl font-semibold ">{name}</h2>
                    <p className="text-sm ">Category: {subcategory}</p>


                    <div className="lex justify-between items-center mt-2">

                        <p className="text-xs ">Processing Time: {time} days</p>
                        <p className="text-xs mr-2 mt-2 ">
                            Customization: <span className="uppercase">{customization}</span>
                        </p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                            <span className="text-sm  mr-2">
                                Price: ${price}
                            </span>
                            <span className="text-sm ">
                                Rating: {rating}
                            </span>
                        </div>
                        <span className={`text-xs font-semibold px-2 py-1 uppercase rounded`}>
                            {stockStatus}
                        </span>
                    </div>
                </div>
                <div className="px-6 pb-4 pt-2">
                    <div className="flex justify-between">
                        <Link to={`/update/${_id}`} className="text-sm text-gray-600 hover:text-gray-900 mr-2">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Update
                            </button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Delete
                            </button>
                        </button>
                    </div>
                </div>
                <div className="px-6 flex justify-end pb-2">
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

export default Card;
