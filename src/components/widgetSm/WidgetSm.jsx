import { Visibility } from "@mui/icons-material";
import "./widgetSm.scss";

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <h3 className="widgetSmTitle">New Users</h3>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <div className="widgetSmListItemLeft">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">User1</span>
                            <span className="widgetSmUserTitle">Something</span>
                        </div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="fontSmIcon" />Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <div className="widgetSmListItemLeft">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">User1</span>
                            <span className="widgetSmUserTitle">Something</span>
                        </div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="fontSmIcon" />Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <div className="widgetSmListItemLeft">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">User1</span>
                            <span className="widgetSmUserTitle">Something</span>
                        </div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="fontSmIcon" />Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <div className="widgetSmListItemLeft">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">User1</span>
                            <span className="widgetSmUserTitle">Something</span>
                        </div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="fontSmIcon" />Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <div className="widgetSmListItemLeft">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">User1</span>
                            <span className="widgetSmUserTitle">Something</span>
                        </div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="fontSmIcon" />Display
                    </button>
                </li>
            </ul>
        </div>  
    )
}

export default WidgetSm;