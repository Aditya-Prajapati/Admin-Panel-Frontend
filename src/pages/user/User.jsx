import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import "./user.scss";
import { Link } from "react-router-dom";

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userCreateButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">User 0</span>
                            <span className="userShowUserTitle">Something</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <div className="userShowTitle">Account Details</div>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">user09</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">10-12-2002</span>
                        </div>

                        <div className="userShowTitle">Contact Details</div>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+91 9898982999</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">user@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Mars | Milkyway</span>
                        </div>
                    </div>
                </div>

                <div className="userUpdate">
                    <h3 className="userUpdateTitle">Edit</h3>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="User 0" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="User 0" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="User@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+91 9898982999" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Mars | Milkyway" className="userUpdateInput" />
                            </div>
                        </div>

                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                                <div className="userUpdateUploadOverlay">
                                    <label htmlFor="file"><Publish className="userUploadIcon" /></label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </div>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div >
            </div >
        </div >
    )
}

export default User;