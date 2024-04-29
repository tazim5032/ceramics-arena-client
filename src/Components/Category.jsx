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


        <div className=" mx-[1%] md:mx-[3%] rounded-xl mt-24 pb-12 border-2">

            <h1 className="text-5xl text-center font-bold  pt-12">Art & Craft Categories</h1>
            <h1 className="text-center  font-medium pt-2">Art & Craft Categories encompass a wide spectrum of creative pursuits, from traditional mediums like painting to modern techniques like digital art. </h1>
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
