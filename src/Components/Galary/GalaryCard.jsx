import { useLoaderData } from "react-router-dom";


const GalaryCard = () => {
    const loadGalary = useLoaderData()

    return (
        <div data-aos="zoom-in-right" className="max-w-6xl mx-auto mt-8">
            <div className="py-8">
                <h2 className="text-4xl font-light">Just For You</h2>
            </div>
            <div  className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">

                { 
                    loadGalary?.map(galary => <div className=" w-full h-64 lg:h-auto lg:w-52" key={galary._id}>
                        <img className="h-64 lg:h-40 w-full  rounded-lg" src={galary.image} alt="" />
                    </div>)
                }






            </div>

        </div>
    );
};

export default GalaryCard;