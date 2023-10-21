/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const MycartDelete = ({cart,cartUpadete,  setCartUpdate}) => {
const {_id,shortDescription,name,image}=cart;
    const handleDelete = (_id) => {
        console.log(_id)


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
              fetch(` https://b8a10-brandshop-server-side-alauddin-24434-qzj8zo0im.vercel.app/cartSingle/${_id}`,{
                method:'DELETE'
              })
              .then(res=> res.json())
              .then(data=>{
                console.log(data)
                if (data.deletedCount > 0) {

                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    const watchRemaining=cartUpadete?.filter(wat=> wat._id !==_id);
                    setCartUpdate(watchRemaining)
                }
              })
            

            }
        })






    }
    return (
        <div>
            <  div className=" bg-slate-400 flex items-center justify-center flex-col lg:flex-row max-w-96 lg:h-40 shadow-xl">
                    
                    <div>
                    <figure className="max-w-full lg:w-60 h-96 lg:h-40"><img className="w-full h-full object-cover " src={image} alt="cart " /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{shortDescription}</p>
                      <div className="flex flex-row justify-between">
                      <p>{cart.price}</p>
                        <button onClick={() => handleDelete(_id)} className="btn w-20 ">Delete</button>
                      </div>
                    </div>
                    


                </div>
                
        </div>
    );
};

export default MycartDelete;