import { useLoaderData } from "react-router-dom";



const AllProducts = () => {
    const loadAllProducts = useLoaderData();
    // console.log("hi", loadAllProducts)
    return (
        <div className=" max-w-5xl mx-auto mt-4 ">
              <div className="py-8">
                <h1 className="font-light text-4xl">Just For You</h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-43 gap-6">
          
                {
                    loadAllProducts?.map(allProduct => <div key={allProduct._id} className="max-w-52 h-72 bg-white shadow-lg border mx-auto">
                      <div className="h-40 border">
                      <img className="h-full w-52 object-cover" src={allProduct?.image} alt="" />
                      </div>
                        <div className="">
                            <div className="p-2">
                                <p className="text-sm text-sky-600">{allProduct.name?.slice(0, 20)}...</p>
                                <p>Price: {allProduct?.price}</p>

                                <div className="flex justify-between">
                                    <span>{allProduct?.rating}</span>

                                </div>
                            </div>

                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default AllProducts;