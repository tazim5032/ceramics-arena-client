import Helmet from "react-helmet";
import Category from "../Components/Category";
import CustomerReviews from "../Components/CustomerReviews";
import NewsletterSignup from "../Components/NewsletterSignup";
import ShowCardHome from "../Components/ShowCardHome";
import Slider from "../Components/Slider";

const Home = () => {
    return (
        <div className="bg-[#FAF3E0]">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <ShowCardHome></ShowCardHome>
            <Category></Category>
            <CustomerReviews></CustomerReviews>
            <NewsletterSignup></NewsletterSignup>
        </div>
    );
};

export default Home;