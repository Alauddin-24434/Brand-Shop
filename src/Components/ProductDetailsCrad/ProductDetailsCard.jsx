import { useLoaderData } from "react-router-dom";

const ProductDetailsCard = () => {
    const loadDetailsCard = useLoaderData() || {}
    const { name, image } = loadDetailsCard
    console.log("this is details", loadDetailsCard)
    return (
        <div className="max-w-7xl mx-auto bg-green-600">
            <div className="grid grid-cols-5">
                <div className="col-span-3 grid grid-cols-3 ">
                    <div className="col-span-1 w-80 h-72 bg-red-700">
                        <img className="h-full w-80 object-cover" src={image} alt="" />
                    </div>
                    <div className="col-span-2">
                        <p>{name}</p>
                    </div>

                </div>
                <div className="col-span-2">

                </div>
            </div>
        </div>
    );
};

export default ProductDetailsCard;