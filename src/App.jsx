import React from 'react'
import CartWidget from './componentes/CartWidget/CartWidget'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
const App = () => {
  return (
    <>
      
      <NavBar/>
      <ItemListContainer greeting= "Pagina en Construccion"/>
      <ItemDetailContainer/>
      
      
    </>
  )
}

export default App
