import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CarritoContext = createContext()

const CarritoProvider = ( { children } ) => {
    const [agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])

    const agregarCarritoContext = (producto) => {
        agregarAlCarrito(producto)
    }
    
    const eliminarCarritoContext = (id) => {
        eliminarDelCarrito(id)
    }

    const guardarCarritoContext = () => {
    /* Petición asincrónica a nuestro backend */
    /* Limpiar el localStorage */
    limpiarCarrito()

}
    
    const data = {carrito, agregarCarritoContext, eliminarCarritoContext, guardarCarritoContext}
    
    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}
    
export { CarritoProvider }

export default CarritoContext