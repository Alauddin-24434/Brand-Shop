import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Cetagory = () => {

    const [fakeData, setFakeData] = useState([])

    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => setFakeData(data))
    }, [])
    // console.log(fakeData)
    return (
      <div className="mt-4 max-w-5xl mx-auto ">
        <h2 className="font-light text-4xl py-8">
        Categories
        </h2>
          <div className="grid grid-cols-3 gap-4 ">
            {
                fakeData?.map(fake => <div className="border w-80 h-auto" key={fake.id}>

                    <Link to={`/brand/${fake.brand}`}>
                 
                        <img className="w-full h-60" src={fake.image} alt="" />
                        <div className="p-2">
                            <p>{fake.name}</p>
                        </div>
                   



                    </Link>
                </div>




                )

            }
          
        </div>
      </div>
    );
};

export default Cetagory;