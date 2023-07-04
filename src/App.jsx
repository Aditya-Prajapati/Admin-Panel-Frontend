import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

const App = () => {
    return(
        <Router>
            <Topbar />
            <div className="container">
                <Sidebar /> 
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/users" element={<UserList />} /> 
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="*" element={<h1 style={{flex: 4, display: "flex", alignItems: "center", justifyContent: "center"}}>404! Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;