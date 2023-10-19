import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Cetagory = () => {

    const [fakeData, setFakeData] = useState([])

    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => setFakeData(data))
    }, [])
    console.log(fakeData)
    return (
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 ">
            {
                fakeData?.map(fake => <div key={fake.id}>

                    <Link to={`/brand/${fake.brand}`}>
                    <div className="w-96 h-96">
                        <img className="w-full h-60" src={fake.image} alt="" />
                        <div>
                            <p>{fake.brand}</p>
                        </div>
                    </div>



                    </Link>
                </div>




                )

            }
          
        </div>
    );
};

export default Cetagory;