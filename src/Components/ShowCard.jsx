import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({item}) => {
    const { _id, name, subcategory, price, rating, stockStatus, photo } = item;
    return (
        <div className="w-full max-w-xs mx-auto">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                <img className="w-full h-48 object-cover object-center" src={photo} alt={name} />
                <div className="py-4 px-6">
                    <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                    <p className="text-sm text-gray-600">{subcategory}</p>
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                            <span className="text-sm text-gray-700 mr-2">
                                ${price}
                            </span>
                            <span className="text-xs text-gray-500">
                                Rating: {rating}
                            </span>
                        </div>
                        <span className={`text-xs font-semibold px-2 py-1 uppercase rounded bg-[#F6D9E2]`}>
                            {stockStatus}
                        </span>
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

export default ShowCard;