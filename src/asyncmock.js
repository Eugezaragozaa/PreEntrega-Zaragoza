const productos = [
    {id: 1, nombre: "Buzo", precio: 20000, img: "./img/Buzo.jpg" },
    {id: 1, nombre: "Remera", precio: 7000, img: "./img/Remera.jpg" },
    {id: 1, nombre: "Pantalon", precio: 25000, img: "./img/Pantalon.jpg" },
    {id: 1, nombre: "Camiseta", precio: 15000, img: "./img/Camiseta.jpg" },
    {id: 1, nombre: "Campera", precio: 50000, img: "./img/Campera.jpg" }
]

export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout ( () => {
            resolve (productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout ( () => {
            const producto = productos.find(prod => prod.id === id);
        }, 2000)
    })
}