
import Cetagory from "../Components/Cetagory/Cetagory";
import FlashSale from "../Components/FlashSale/FlashSale";
import Footer from "../Components/Footer/Footer";
import GalaryCard from "../Components/Galary/GalaryCard";

const Home = () => {
    return (
        <div className="bg-gray-200">
            <FlashSale></FlashSale>

            <Cetagory></Cetagory>
          
            <GalaryCard></GalaryCard>
            <Footer></Footer>

        </div>
    );
};

export default Home;