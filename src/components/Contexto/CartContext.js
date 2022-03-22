import { createContext, useState } from "react";


export const contexto = createContext ()

const {Provider} = contexto


const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)
    
    const addItem = (producto, cantidad) =>{
        const copiaCarrito = [...carrito]
        const itemAlCarrito = {...producto, cantidad}
        
        if (yaExisteEnCarrito(producto.id)) {
            let index = copiaCarrito.findIndex(item => item.id === producto.id)
            copiaCarrito[index].cantidad += cantidad
            setCarrito(copiaCarrito)
        }
        else{
            copiaCarrito.push(itemAlCarrito)
            setCarrito(copiaCarrito)
        }
    }        
    
    const yaExisteEnCarrito = (id) => {
        return carrito.some(item => item.id === id)
        }


    const calcCantidad = () => {
        let cantidad = 0
        carrito.forEach (item => cantidad += item.cantidad )
        return cantidad
    }
    

    const removeItem = (id) => {
        const copiaCarrito = [...carrito];
        const indexProd = carrito.findIndex(prod => prod.id === id);

        copiaCarrito.splice(indexProd, 1);
        setCarrito(copiaCarrito);
    };
    
    
    const clear = () => {
            setCarrito([])
        }
        

    const valorContexto = {
        carrito,
        cantidad,
        total,
        addItem,
        calcCantidad,
        removeItem,
        clear,
    }

    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider