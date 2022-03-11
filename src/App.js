import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"



const App = () => {
    return (
        <>
            <NavBar/>
            {/* <ItemListContainer usuario="R2D2"/> */}
            <ItemDetailContainer/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App