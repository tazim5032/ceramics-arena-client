import { Link } from "react-router-dom";

const ShowCategory = ({ item }) => {
    return (
        <Link to={`/allCategory/${item.subcategory}`}>
            <div className="w-full max-w-xs mx-auto h-96 ">
                <div className=" shadow-lg rounded-lg border-2 overflow-hidden h-full">
                    <img className="w-full h-48 object-cover object-center" src={item.photo} alt={item.subcategory} />
                    <div className="py-4 px-6">
                        <h2 className="text-xl font-semibold ">{item.subcategory}</h2>
                        <p className="text-sm ">{item.description}</p>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ShowCategory;
