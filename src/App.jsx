import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"

import ProductList from "./pages/ProductList"
import { useSelector } from "react-redux"

function App() {

  const user = useSelector(state => state.user.currentuser);

  return (
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>
      <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}

export default App
