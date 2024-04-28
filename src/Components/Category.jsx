import { useEffect, useState } from "react";
import ShowCategory from "./ShowCategory";

const Category = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allCategory')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [])

    return (
   

        <div className="bg-[#FAF3E0] mb-8">
            <h1 className="text-5xl text-center font-bold text-blue-600 py-12">Art & Craft Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    gap-12 pt-12 mx-[2%] sm:mx-[4%]">
                {
                    items.map(item => <ShowCategory key={item._id} item={item}></ShowCategory>)
                }
            </div>
        </div>
    );
};

export default Category;
