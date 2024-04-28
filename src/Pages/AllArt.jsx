import { Link, useLoaderData } from "react-router-dom";

const AllArt = () => {
    const data = useLoaderData();
    //console.log(data);
    return (
        <div className="bg-white p-2 sm:p-24 sm:pt-8">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Item Name</th>
                            <th>Category</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody className="">

                        {
                            data.map((item, idx) => <tr key={item._id}>
                                <th className="py-4">{idx + 1}</th>
                                <td className="py-4">{item.name}</td>
                                <td className="py-4">{item.subcategory}</td>
                                <td className="py-4">${item.price}</td>
                                <td><Link to={`/details/${item._id}`} className="bg-green-700 py-1 px-2 rounded 
                    text-xs font-medium
                     text-white shadow transition
                     duration-300 hover:bg-green-900">
                                    View Details
                                </Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArt;