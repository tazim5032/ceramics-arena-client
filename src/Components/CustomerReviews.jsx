const CustomerReviews = () => {
    return (
        <section className="py-16 mx-[1%] md:mx-[3%] rounded-xl mt-12 border-2">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold text-center mb-8"
                    data-aos="flip-up" data-aos-duration="1000">Customer Reviews</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="rounded-lg shadow-md overflow-hidden
             transform transition-all duration-500 hover:scale-105"
                        data-aos="flip-up" data-aos-duration="1000">
                        <div className="bg-gradient-to-b from-blue-400 to-blue-500 p-4 flex items-center">
                            <img src="https://i.ibb.co/mDVdJbx/agent2.png" className="h-12 w-12 rounded-full mr-2" alt="John Doe" />
                            <p className="text-lg font-semibold text-white">Daniel Roster</p>
                        </div>
                        <div className="p-6">
                            <p className="animate-pulse">
                                The handmade pottery vase I purchased exceeded my expectations! Its intricate design and rustic charm add a touch of elegance to my living room. I love how each vase is unique, reflecting the craftsmanship of the artist. It's become the centerpiece of my home, and I receive compliments on it from everyone who visits. Highly recommend for anyone looking to add a personal, artisanal touch to their decor!</p>
                        </div>
                    </div>
                    <div className=" rounded-lg shadow-md overflow-hidden
             transform transition-all duration-500 hover:scale-105"
                        data-aos="flip-up" data-aos-duration="1000">
                        <div className="bg-gradient-to-b from-blue-400 to-blue-500 p-4 flex items-center">
                            <img src="https://i.ibb.co/93RbmGJ/agent1.png" className="h-12 w-12 rounded-full mr-2" alt="John Doe" />
                            <p className="text-lg font-semibold text-white">Robert Lee</p>
                        </div>
                        <div className="p-6">
                            <p className=" animate-pulse">
                            As a customer, I couldn't be happier with the flower tub I purchased! It has truly transformed my garden into a vibrant oasis of color and beauty. The tub's durable material and spacious design make it perfect for displaying my favorite flowers and plants. I love how it effortlessly adds charm to my outdoor space, becoming the focal point of admiration for friends and family. It's a delightful addition to my home and has exceeded all my expectations!</p>
                        </div>
                    </div>
                    <div className=" rounded-lg shadow-md overflow-hidden
             transform transition-all duration-500 hover:scale-105"
                        data-aos="flip-up" data-aos-duration="1000">
                        <div className="bg-gradient-to-b from-blue-400 to-blue-500 p-4 flex items-center">
                            <img src="https://i.ibb.co/Twk7pxJ/agent3.png" className=" h-12 w-12 rounded-full mr-2" alt="John Doe" />
                            <p className="text-lg font-semibold text-white">John Dowson</p>
                        </div>
                        <div className="p-6">
                            <p className=" animate-pulse">
                            As a homeowner, I can't recommend the terra cotta roof enough! Its classic charm and durability have completely transformed the look of my home. Not only does it provide excellent protection from the elements, but its earthy tones also add warmth and character to the entire neighborhood. I've received countless compliments from neighbors and friends alike, all impressed by its timeless beauty. If you're looking to enhance the aesthetics and value of your home, investing in a terra cotta roof is definitely the way to go!</p>
                        </div>
                    </div>

                </div>
                <div className="text-center mt-8">
                    <button className="text-blue-500 hover:text-blue-700">See More Reviews</button>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
