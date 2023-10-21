

const Banner = () => {
    return (
        <div className="max-w-6xl mx-auto mt-2 ">
            <div className="hero mx-w-full object-cover lg:h-96" style={{ backgroundImage: 'url(https://i.ibb.co/Z2Bvzqd/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera.jpg)' }}>
                <div className="hero"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md ">
                        <h1 className="mb-5 text-black font-medium text:lg lg:text-2xl">BLACK FRIDAY <br /> SALE </h1>
                      <div className="text-4xl lg:text-8xl text-red-500">50%<sup className="text-sm lg:text-2xl">Off</sup></div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;