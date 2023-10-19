import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
    const loadCartInfo = useLoaderData()
    const [cartUpadete, setCartUpdate]=useState(loadCartInfo)
    console.log(loadCartInfo)

    const handleDelete = (id) => {
        console.log(id)


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                // delete in clint side items
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        // condition set
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const cartRemaining=cartUpadete?.filter(wat=> wat.id !==id);
                            setCartUpdate(cartRemaining)
                        }
                    })


            }
        })






    }

    return (
        <div className="flex flex-col max-w-6xl mx-auto gap-4 justify-evenly mt-8">
            {
                cartUpadete?.map(cart => <div key={cart._id} className=" bg-slate-400 flex items-center justify-center flex-col lg:flex-row max-w-96 lg:h-40 shadow-xl">
                    
                    <div>
                    <figure className="max-w-full lg:w-60 h-96 lg:h-40"><img className="w-full h-full object-cover " src={cart.image} alt="cart " /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{cart.name}</h2>
                        <p>{cart.shortDescription}</p>
                      <div className="flex flex-row justify-between">
                      <p>{cart.price}</p>
                        <button onClick={() => handleDelete(cart._id)} className="btn w-20 ">Delete</button>
                      </div>
                    </div>
                    


                </div>)
            }
        </div>
    );
};

export default MyCart;