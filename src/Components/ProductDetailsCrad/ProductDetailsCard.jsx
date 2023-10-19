import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetailsCard = () => {
    const loadDetailsCard = useLoaderData() 
    const { _id, name, brand, type, price, rating, shortDescription, image } = loadDetailsCard



    const handleCart = (_id, name, brand, type, price, rating, shortDescription, image) => {
        console.log(_id, name, brand, type, price, rating, shortDescription, image)

        const cartInfo = { _id, name, brand, type, price, rating, shortDescription, image }
        fetch('http://localhost:5000/cart',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(cartInfo)

        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: "Coffee updated successfully!",
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
                            <p>{_id}</p>
                            <button onClick={() => handleCart(_id, name, brand, type, price, rating, shortDescription, image)} className="btn">ADD To CART</button>
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