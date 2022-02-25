import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import ItemListContainer from "./components/ItemListContainer"



const App = () => {
    return (
        <>
            <NavBar/>
            <ItemListContainer nombre=" Tutor Arturo"/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App