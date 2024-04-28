import { useLoaderData } from "react-router-dom";
import ShowCard from "./ShowCard";

const ShowCardHome = () => {
    const items = useLoaderData();
    return (
        <div className="">
            <h1 className="text-5xl text-center font-bold text-blue-600 py-8">Craft Items</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-12 pt-12 mx-[2%] sm:mx-[4%]">
                {
                    items.slice(0,6).map(item => <ShowCard 
                        key={item._id}
                        item={item}
                    ></ShowCard>)
                  
                }
            </div>
        </div>
    );
};

export default ShowCardHome;