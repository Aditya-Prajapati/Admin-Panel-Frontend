import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/home";

const App = () => {
    return(
        <>
            <div>
                <Topbar />
                <div className="container">
                    <Sidebar /> 
                    <Home />
                </div>
            </div>
        </>
    )
}

export default App;