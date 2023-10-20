import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ProductDetailsCard = () => {
    const { authUser } = useContext(AuthContext)
    const loadDetailsCard = useLoaderData()
    const { name, brand, type, price, rating, shortDescription, image } = loadDetailsCard

    const email = authUser?.email;

    const handleCart = (name, brand, type, price, rating, shortDescription, image) => {
        console.log(name, brand, type, price, rating, shortDescription, image)

        const cartInfo = { email, name, brand, type, price, rating, shortDescription, image }
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
        <div className="max-w-6xl mx-auto  grid grid-cols-5">

            <div className="col-span-2 max-w-6xl h-52">
                <img className="w-full h-96" src={image} alt="" />
            </div>
            <div className="col-span-3 py-4">
                <p>{name}</p>
                <hr className="p-2" />
                <p>{brand}</p>
                <p>{price}</p>
                <hr className="p-2" />
                <p>{shortDescription}</p>
                <hr className="p-2" />
                <button onClick={() => handleCart(name, brand, type, price, rating, shortDescription, image)} className="btn">ADD To CART</button>
            </div>


        </div>
    );
};

export default ProductDetailsCard;