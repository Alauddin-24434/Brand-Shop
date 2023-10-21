import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Cetagory = () => {

    const [fakeData, setFakeData] = useState([])

    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => setFakeData(data[0]))
    }, [])
    // console.log(fakeData)
    return (
      <div data-aos="zoom-in-right" className="mt-4 max-w-6xl mx-auto ">
        <h2 className="font-light text-4xl py-8">
        Categories
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {
                fakeData?.map(fake => <div className="border max-w-80 h-auto" key={fake.id}>

                    <Link to={`/brand/${fake.brand}`}>
                 
                        <img className="w-full h-60 object-cover" src={fake.image} alt="" />
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