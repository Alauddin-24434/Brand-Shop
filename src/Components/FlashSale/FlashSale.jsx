import { useEffect, useState } from "react";


const FlashSale = () => {
    const [fakeData,setFakeData]=useState([])
    useEffect(()=>{
        fetch('/brand.json')
        .then(res=> res.json())
        .then(data=>setFakeData(data[1]))
    },[])
    return (
     <div className="  mt-4  max-w-6xl mx-auto">
        <h2 className="text-4xl py-4 font-light">
            Offer Sale
        </h2>
        <div className="bg-white " >
            <div className=" flex flex-col p-4 lg:flex-row items-center gap-8">
                <div>
                <p>On Sale Now</p>
                </div>
               <div className="flex flex-col lg:flex-row items-center gap-4">
                <p>Ending in</p>
               <div className="grid grid-flow-col  gap-5 text-center auto-cols-max">
                    <div className="flex flex-col w-14 justify-center p-2 bg-neutral h-16 text-neutral-content">
                        <span className="countdown font-mono text-2xl ">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 w-14 h-16 bg-neutral text-neutral-content">
                        <span className="countdown font-mono text-2xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 w-14 h-16 bg-neutral text-neutral-content">
                        <span className="countdown font-mono text-2xl">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col justify-center p-2 w-14 h-16 bg-neutral text-neutral-content">
                        <span className="countdown font-mono text-2xl">
                            <span style={{ "--value": 59 }}></span>
                        </span>
                        sec
                    </div>
                </div>
               </div>

            </div>
            <hr />
     
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-4 ">
            {
                fakeData?.map(fake => <div className=" w-full lg:max-w-80 h-80" key={fake.id}>

                    {/* <Link to={`/brand/${fake.brand}`}> */}
                 
                        <img className="w-full h-52 object-cover" src={fake.image} alt="" />
                        <div className="p-2">
                            <p className="text-base text-blue-700">{fake.name.slice(0,30)}</p>
                            <p className="text-orange-500"><span className="text-2xl">৳</span> {fake.price}</p>
                        </div>
                   



                    {/* </Link> */}
                </div>




                )

            }
          
        </div>
     


        </div>
     </div>
    );
};

export default FlashSale;