import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <h3>Precio {precio}</h3>
            <p>ID: {id} </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam ullam amet ipsa aliquam nam labore atque aut expedita id ab voluptatibus, natus molestiae neque illo sequi placeat, alias consequuntur.</p>
            <img src={img} alt={nombre}/>
        </div>
    )
}

export default ItemDetail