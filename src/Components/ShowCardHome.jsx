import { useLoaderData } from "react-router-dom";
import ShowCard from "./ShowCard";

const ShowCardHome = () => {
    const items = useLoaderData();
    return (
        <div className="bg-gradient-to-b from-gray-50 to-cyan-100 mx-[1%] md:mx-[3%] rounded-xl mt-24 pb-12">
            <h1 className="text-5xl text-center font-bold text-blue-600 pt-8">Craft Items</h1>
            <h1 className="text-center text-black font-bold pt-2">Explore Craft Items and Enjoy the Creativity!</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-12 pt-12 mx-[2%] sm:mx-[4%]">
                {
                    items.slice(0, 6).map(item => <ShowCard
                        key={item._id}
                        item={item}
                    ></ShowCard>)

                }
            </div>
        </div>
    );
};

export default ShowCardHome;