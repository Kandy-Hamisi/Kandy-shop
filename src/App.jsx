import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"

import ProductList from "./pages/ProductList"

function App() {

  return (
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/product" element={<Product/>} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}

export default App
