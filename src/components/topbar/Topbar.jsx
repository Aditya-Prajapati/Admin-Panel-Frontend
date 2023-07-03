import "./topbar.scss";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Language from "@mui/icons-material/Language";
import Settings from "@mui/icons-material/Settings";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="pic" className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}

export default Topbar;