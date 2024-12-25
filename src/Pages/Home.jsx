import Banner from "../Components/Banner";
import DoctorsCard from "../Components/DoctorsCard";
import DoctorsFilter from "../Components/DoctorsFilter";
import FilterOption from "../Components/FilterOption";


const Home = () => {
    return (
        <div>
            <Banner/>
            <FilterOption/>
            <DoctorsFilter/>
            <DoctorsCard/>
        </div>
    );
};

export default Home;