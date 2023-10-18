
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cetagory = () => {
    const [loadCetagory, setLoadCetagory] = useState([])
    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => {

                console.log(data)
                setLoadCetagory(data)

            })
    }, [])
    console.log(loadCetagory)

const handleBrandClick=(brand)=>{
    console.log("this is handle", brand )
    fetch()
}




    return (
        <div>

            <p>This is cetagory</p>
            <div className="grid grid-cols-3 max-w-6xl p-4 gap-4 mx-auto">
                {
                    loadCetagory?.map(cat => <div onClick={()=>handleBrandClick(cat.brand)} key={cat.id} className="max-w-6xl h-auto shadow-md">
                        <Link to={`/brand/${cat.brand}`}>
                        <div className="">
                            <img className="object-cover w-full h-60" src={cat.image} alt="" />


                            <div className="p-4">  {cat.name}</div>
                        </div>
                        </Link>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Cetagory;