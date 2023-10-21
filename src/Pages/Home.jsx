
import Banner from "../Components/Banner/Banner";
import Cetagory from "../Components/Cetagory/Cetagory";
import FlashSale from "../Components/FlashSale/FlashSale";



import GalaryCard from "../Components/Galary/GalaryCard";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <FlashSale></FlashSale>

            <Cetagory></Cetagory>
          
            <GalaryCard></GalaryCard>
          
        </div>
    );
};

export default Home;