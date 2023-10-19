import { useLoaderData } from "react-router-dom";

const Brand = () => {
 
const loadData=useLoaderData()

console.log("this is testing",loadData)
  



   


    return (
        <div className="max-w-5xl mx-auto grid grid-cols-4">
        
        {
            loadData?.map(load=> <div key={load._id}>
                <div>
                    <img src={load.image} alt="" />
                    <p>{load.name}</p>
                </div>

            </div>)
        }
        </div>
    );
};

export default Brand;