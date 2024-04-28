import Category from "../Components/Category";
import ShowCardHome from "../Components/ShowCardHome";
import Slider from "../Components/Slider";

const Home = () => {
    return (
        <div className="bg-[#FAF3E0]">
            <Slider></Slider>
            <ShowCardHome></ShowCardHome>
            <Category></Category>
        </div>
    );
};

export default Home;