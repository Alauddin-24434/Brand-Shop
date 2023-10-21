import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value.toLowerCase();
        const type = form.type.value;
        const price = form.price.value;
        const image = form.image.value;
        const shortDescription = form.shortDescription.value;

        const rating = form.rating.value;

        const newBrand = { name, brand, type, price, rating, shortDescription, image };
        // console.log(newBrand)

        fetch(' https://b8a10-brandshop-server-side-alauddin-24434-qzj8zo0im.vercel.app/brand', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
            .then(res => res.json())
            .then(data => {
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
        <div className="py-8 max-w-6xl mx-auto ">
         <div className="py-4">
       <Link to={'/galary'}>  <button className="btn ">Go galary add Product</button></Link>
         </div>
            <div className="border ">
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-6   mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Name</label>
                            <input type="text" id="" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter category name" required />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Brand Name</label>
                            <input type="text" id="" name="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter brand name" required />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Type</label>

                            <input type="text" id="" name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter product type" required />

                        </div>


                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Price</label>
                            <input type="text" id="" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter product price" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Short Description</label>
                            <input type="text" id="" name="shortDescription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter short description" required />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Rating</label>
                            <input type="text" id="" name="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter item ratings" required />
                        </div>





                    </div>

                    {/* end grid layout */}


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Main image</label>
                        <input type="url" id="" name="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter photo url" required />
                    </div>

                    <br />
                    <div>

                        <input type="submit" value="ADD BRAND ITEM" className="bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>



                </form>
            </div>
        </div>
    );
};

export default AddProduct;