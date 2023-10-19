import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const loadCartInfo = useLoaderData()
    console.log(loadCartInfo)
    return (
        <div className="grid grid-cols-3 max-w-4xl mx-auto gap-4 justify-evenly">
            {
                loadCartInfo?.map(cart => <div key={cart._id}>

                    <div className="w-64 h-96 bg-red-300">
                        <div className="w-64 h-64">
                            <img className="w-64 h-64" src={cart.image} alt="" />
                        </div>
                    </div>


                </div>)
            }
        </div>
    );
};

export default MyCart;