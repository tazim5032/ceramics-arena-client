import Helmet from "react-helmet";
import Category from "../Components/Category";
import CustomerReviews from "../Components/CustomerReviews";
import NewsletterSignup from "../Components/NewsletterSignup";
import ShowCardHome from "../Components/ShowCardHome";
import Slider from "../Components/Slider";
import { Fade } from 'react-awesome-reveal';
//import { Fade } from "react-awesome-reveal";
const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Home</title>
            </Helmet>
            {/* <Fade cascade damping={0.1}> */}

            <Slider></Slider>
            {/* <Fade direction="left" duration={4000}>
                <p className="text-center text-5xl">I will gently appear as I enter the viewport</p>
            </Fade> */}
            <ShowCardHome className='dark:bg-gray-800 py-6 dark:text-gray-100'></ShowCardHome>
            <Category className='dark:bg-gray-800 py-6 dark:text-gray-100'></Category>
            <CustomerReviews className='dark:bg-gray-800 py-6 dark:text-gray-100' ></CustomerReviews>
            <NewsletterSignup className='dark:bg-gray-800 py-6 dark:text-gray-100'></NewsletterSignup>

            {/* </Fade> */}
        </div>
    );
};

export default Home;