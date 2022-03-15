import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from "react-router-dom"



const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Main/>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
        
    )
}

export default App