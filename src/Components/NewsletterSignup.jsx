import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const LatestPost1 = () => (
    <div className=" rounded-lg shadow-md mb-6 border-2">
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
                <Link to="/blog-post" className=" hover:underline">Crafting Tips: How to Perfect Your Pottery Skills</Link>
            </h3>
            <p className="mb-4">
                To perfect your pottery skills, ensure clay remains moist, smooth surfaces with water, and experiment with textures and patterns. Consistent practice, mastering centering, shaping techniques, and embracing imperfections contribute to unique craftsmanship.</p>
            <p className="text-sm ">April 24, 2024</p>
            <div className="text-center mt-8">
                <button className="text-blue-500 hover:underline">Read More</button>
            </div>
        </div>
    </div>
);
const LatestPost2 = () => (
    <div className="rounded-lg shadow-md mb-6 border-2">
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
                <Link to="/blog-post" className=" hover:underline">
                    5 Essential Tools Every Ceramic Artist Needs in Their Studio</Link>
            </h3>
            <p className=" mb-4">
            Ceramic artists need a wheel, kiln, clay, pottery tools, and glazes for creating beautiful pottery masterpieces in their studio.</p>
            <p className="text-sm text-gray-500">April 22, 2024</p>
            <div className="text-center mt-8">
                <button className="text-blue-500 hover:underline">Read More</button>
            </div>
        </div>
    </div>
);
const LatestPost3 = () => (
    <div className="rounded-lg shadow-md mb-6 border">
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
                <Link to="/blog-post" className="hover:underline">
                    Exploring Glazing Techniques: Adding Color and Texture to Your Pottery</Link>
            </h3>
            <p className="mb-4">
            Explore pottery glazing with brushes, sponges, and dipping methods. Experiment with layering colors and textures for unique ceramic artworks.</p>
            <p className="text-sm">April 20, 2024</p>
            <div className="text-center mt-8">
                <button className="text-blue-500 hover:underline">Read More</button>
            </div>
        </div>
    </div>
);

const BlogSection = () => (
    <section className="py-12 mt-12 mx-[2%] sm:mx-[4%] rounded-xl">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center">
            <Typewriter words={['Latest Blog Posts']} loop={true} /></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <LatestPost1  />
                <LatestPost2 />
                <LatestPost3 />
            </div>
        </div>
    </section>
);

const News = () => (
    <section className="mt-12 ">
        <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto p-8 rounded-lg shadow-md border-2">
             
                <h2 className="text-2xl font-semibold mb-4">
                <Typewriter words={['Subscribe to Our Newsletter']} loop={true} />
                </h2>
                <p className="mb-6">Stay updated with the latest crafting tips, trends, and product spotlights by subscribing to our newsletter.</p>
                <form>
                    <div className="flex flex-col sm:flex-row">
                        <input type="email" placeholder="Enter your email address" className="px-4 py-2 mb-4 sm:mb-0 w-full sm:w-2/3 border rounded-lg focus:outline-none focus:border-blue-500" />
                        <button type="submit" className="font-semibold py-2 px-6 rounded-lg sm:w-1/3 border-2 ml-1">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
);

const NewsletterSignup = () => (
    <div className='border-2 rounded-xl mx-[1%] md:mx-[3%] mt-24 pb-12'>
        <BlogSection />
        <News />
    </div>
);

export default NewsletterSignup;
