import "./sidebar.scss";
import { Link } from "react-router-dom";
import LineStyle from "@mui/icons-material/LineStyle";
import Timeline from "@mui/icons-material/Timeline";
import TrendingUp from "@mui/icons-material/TrendingUp";
import PermIdentity from "@mui/icons-material/PermIdentity";
import Storefront from "@mui/icons-material/Storefront";
import AttachMoney from "@mui/icons-material/AttachMoney";
import BarChart from "@mui/icons-material/BarChart";
import MailOutline from "@mui/icons-material/MailOutline";
import DynamicFeed from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutline from "@mui/icons-material/BarChart";
import WorkOutline from "@mui/icons-material/WorkOutline";
import Report from "@mui/icons-material/Report";
import { useState } from "react";

const Sidebar = () => {
    const [id, setId] = useState(0);

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/">
                            <li className={`sidebarListItem ${id===0 ? "active":""}`} onClick={() => setId(0)}>
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className={`sidebarListItem ${id===1 ? "active":""}`} onClick={() => setId(1)}>
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className={`sidebarListItem ${id===2 ? "active":""}`} onClick={() => setId(2)}>
                            <TrendingUp className="sidebarIcon" />
                            Sales 
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users">
                            <li className={`sidebarListItem ${id===3 ? "active":""}`} onClick={() => setId(3)}>
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link> 
                        <Link to="/products">
                            <li className={`sidebarListItem ${id===4 ? "active":""}`} onClick={() => setId(4)}>
                                <Storefront className="sidebarIcon" />
                                Products
                            </li>
                        </Link>
                        <li className={`sidebarListItem ${id===5 ? "active":""}`} onClick={() => setId(5)}>
                            <AttachMoney className="sidebarIcon" />
                            Transactions
                        </li> 
                        <li className={`sidebarListItem ${id===6 ? "active":""}`} onClick={() => setId(6)}>
                            <BarChart className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className={`sidebarListItem ${id===7 ? "active":""}`} onClick={() => setId(7)}>
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className={`sidebarListItem ${id===8 ? "active":""}`} onClick={() => setId(8)}>
                            <DynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className={`sidebarListItem ${id===9 ? "active":""}`} onClick={() => setId(9)}>
                            <ChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className={`sidebarListItem ${id===10 ? "active":""}`} onClick={() => setId(10)}>
                            <WorkOutline className="sidebarIcon" />
                            Manage
                        </li>
                        <li className={`sidebarListItem ${id===11 ? "active":""}`} onClick={() => setId(11)}>
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className={`sidebarListItem ${id===12 ? "active":""}`} onClick={() => setId(12)}>
                            <Report className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;