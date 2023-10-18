
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

        const newWatch = { name, brand, type, price, rating, shortDescription, image };
        console.log(newWatch)

        // fetch('http://localhost:5000/watch', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newWatch)
        // })
        form.reset()
    }
    return (
        <div className="max-w-6xl mx-auto ">
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6   mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Name</label>
                        <input type="text" id="" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter category name" required />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Brand Name</label>
                        <div className="max-w-6xl mx-auto h-auto border p-2 rounded-md">
                       <label className="p-4">Choose a brand name :</label>
                        <select name="brand" id="brand" value="none" required>
                            <option value="" disabled selected>None</option>
                            <option value="samsung">Samsung</option>
                            <option value="google">Google</option>
                            <option value="walton">Walton</option>
                            <option value="msi">Msi</option>
                            <option value="sony">Sony</option>
                            <option value="apple">Apple</option>
                        </select>
                       </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Type</label>
                        {/* <input type="text" id="" name="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter brand name" required /> */}
                       <div className="max-w-6xl mx-auto h-auto border p-2 rounded-md">
                       <label className="p-4">Choose a category type :</label>
                        <select name="type" id="type" value="none" required>
                            <option value="" disabled selected>None</option>
                            <option value="phone">Phone</option>
                            <option value="laptop">Laptop</option>
                            <option value="macBook">Mac Book</option>
                            <option value="tv">Tv</option>
                            <option value="monitor">Monitor</option>
                            <option value="tv">Tv</option>
                            
                        </select>
                       </div>


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

                    <input type="submit" value="Add Item" className="bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>



            </form>
        </div>
    );
};

export default AddProduct;