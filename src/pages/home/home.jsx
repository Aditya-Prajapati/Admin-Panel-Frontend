import "./home.scss";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Charts from "../../components/charts/Charts";
import userData from "../../dummyData";

const Home = () => {
    
    return (
        <div className="home">
            <FeaturedInfo />
            <Charts title="User Analytics" data={userData} grid dataKey="Active User" />
        </div>
    )
}

export default Home;