import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import MycartDelete from "./MycartDelete";

const MyCart = () => {
    const loadCartInfo = useLoaderData()
    const [cartUpadete, setCartUpdate] = useState(loadCartInfo)
    console.log("sign", loadCartInfo)



    return (
        <div className="flex flex-col min-h-screen max-w-6xl mx-auto gap-4 justify-evenly mt-4">
            {

                cartUpadete.length > 0 ?

                    cartUpadete?.map(cart => <MycartDelete key={cart._id}


                        cart={cart}
                        cartUpadete={cartUpadete}
                        setCartUpdate={setCartUpdate}


                    ></MycartDelete>)



                    :
                    <div className="text-center text-2xl text-red-600">
                        <h2>No product Found</h2>
                    </div>

            }

        </div>
    );
};

export default MyCart;