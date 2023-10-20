import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import MycartDelete from "./MycartDelete";

const MyCart = () => {
    const loadCartInfo = useLoaderData()
    const [cartUpadete, setCartUpdate]=useState(loadCartInfo)
    console.log(loadCartInfo)

   

    return (
        <div className="flex flex-col max-w-6xl mx-auto gap-4 justify-evenly mt-8">
            {
                cartUpadete?.map(cart => <MycartDelete key={cart._id}
                
                
                cart={cart}
                cartUpadete={cartUpadete}
                setCartUpdate={setCartUpdate}
                
                
                ></MycartDelete>)
            }
        </div>
    );
};

export default MyCart;