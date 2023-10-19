import { Link, useLoaderData } from "react-router-dom";

const Brand = () => {

    const loadData = useLoaderData()

    // console.log("this is testing", loadData)






    return (
        <div>
            <div>
              
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-4">

                {
                    loadData?.map(load => <div className="w-64 h-96 border  bg-white shadow-lg" key={load._id}>
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