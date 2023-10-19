import { useLoaderData } from "react-router-dom";



const AllProducts = () => {
    const loadAllProducts = useLoaderData();
    // console.log("hi", loadAllProducts)
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-43 gap-6 max-w-5xl mx-auto ">
                {
                    loadAllProducts?.map(allProduct => <div key={allProduct._id} className="max-w-4xl bg-white mx-auto">
                        <img className="h-60 w-full object-cover" src={allProduct?.image} alt="" />
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