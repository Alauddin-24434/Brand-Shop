import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ProductDetailsCard = () => {
    const { authUser } = useContext(AuthContext)
    const loadDetailsCard = useLoaderData()
    const { name, brand, type, price, rating, shortDescription, image } = loadDetailsCard

    const email = authUser.email;

    const handleCart = (name, brand, type, price, rating, shortDescription, image) => {
        console.log(name, brand, type, price, rating, shortDescription, image)

        const cartInfo = {email, name, brand, type, price, rating, shortDescription, image }
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartInfo)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: "Product add successfully!",
                        icon: 'success',

                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',

                    })
                }
            })

    }
    return (
        <div className="max-w-6xl mx-auto bg-green-600">
            <div className="grid md:grid-cols-4 lg:grid-cols-5">
                <div className="lg:col-span-4 grid max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-4 bg-yellow-700 ">
                    <div className="col-span-2  w-80 h-72 bg-red-700">
                        <img className="h-full w-80 object-cover" src={image} alt="" />
                    </div>
                    <div className="col-span-2 bg-purple-900 ">
                        <div className="bg-red-600">

                            <button onClick={() => handleCart(name, brand, type, price, rating, shortDescription, image)} className="btn">ADD To CART</button>
                        </div>
                    </div>

                </div>
                <div className="col-span-1 bg-purple-700">
                    <p > {price}</p>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailsCard;