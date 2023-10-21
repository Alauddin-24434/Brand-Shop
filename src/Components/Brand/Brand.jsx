import { Link, useLoaderData } from "react-router-dom";

const Brand = () => {

    const loadData = useLoaderData()
    const {image}=loadData;
    console.log(image)

    // console.log("this is testing", loadData)






    return (
        <div className="mt-8 max-w-6xl mx-auto">
            {/* slider */}

            <div className="carousel mb-2 lg:mb-8 max-h-96">
                <div id="slide1" className="carousel-item relative  w-full">
                    <img src="https://i.ibb.co/PhP7Z2k/1680956258.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/WvRcR7R/amazon-india-electronics-sale-2015-banner-555x250.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/DfJwkTt/83d70974403181-5c2e97fb1f91b.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
             
            </div>

            <div className="gap-4 grid grid-cols-1 mt-4 lg:mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {
                    loadData?.map(load => <div className="max-w-64 h-96 border  bg-white shadow-lg" key={load._id}>
                        <div>
                            <img className="w-full h-48" src={load.image} alt="" />

                        </div>
                        <div className="p-3 flex flex-col  gap-y-1 ">
                            <div className="">
                                <p className="text-sm text-sky-600" >{load.name}</p>
                                <p >{load.brand}</p>
                                <p > ‍<span className="text-2xl">৳</span> {load.price}</p>
                                <p >{load.rating}</p>

                            </div>
                            <div className="flex flex-row justify-between  ">
                                <Link to={`/brandSingle/${load._id}`}>  <button className="btn ">Details</button></Link>
                                <Link to={`/brandDetailsUpdate/${load._id}`}>
                                    <button className="btn">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Brand;