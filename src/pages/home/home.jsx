import "./home.scss";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Charts from "../../components/charts/Charts";
import {userData} from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const Home = () => {
    
    return (
        <div className="home">
            <FeaturedInfo />
            <Charts title="User Analytics" data={userData} grid dataKey="Active User" /> 
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home;