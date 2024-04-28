import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
const Details = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            });
    }, [id]);

    if (!product || !Object.keys(product).length) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="loading loading-bars loading-lg"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 pt-8">
            <Helmet>
                <title>Details</title>
            </Helmet>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Image */}
                <div>
                    <img src={product.photo} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
                </div>

                {/* Right Column: Details */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                    <p className="text-lg mb-4"><span className="text-blue-600 font-bold">Category:</span> {product.subcategory}</p>
                    <p className="text-lg mb-4"><span className="text-blue-600 font-bold">Description:</span> {product.description}</p>
                    <p className="text-lg mb-4"><span className="text-blue-600 font-bold">Price:</span> ${product.price}</p>
                    <p className="text-lg mb-4"><span className="text-blue-600 font-bold">Rating:</span> {product.rating}</p>
                    <p className="text-lg mb-4"><span className="text-blue-600 font-bold">Time:</span> {product.time} days</p>
                    <p className="text-lg mb-4"><span className="text-blue-600 font-bold">Customization:</span> {product.customization}</p>
                    <p className="text-lg mb-4"><span className="text-blue-600 font-bold">Stock Status:</span> <span className={`font-bold ${product.stockStatus === 'In stock' ? 'text-green-500' : 'text-red-500'}`}>{product.stockStatus}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Details;
