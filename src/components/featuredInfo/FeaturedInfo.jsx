import "./featuredInfo.scss";
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';

const FeaturedInfo = () => {
    return(
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $2525
                    </span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="featuedIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $1525
                    </span>
                    <span className="featuredMoneyRate">
                        -1.4 <ArrowDownward className="featuedIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $225
                    </span>
                    <span className="featuredMoneyRate">
                        1.8 <ArrowUpward className="featuedIcon positive" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo;