// import './App.css'
// import React from 'react'
import Home from '../src/page/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rental from '../src/page/rental'
import Register from '../src/page/register'
import Login from '../src/page/login'
import About from '../src/page/about'
import App from '../src/App'
import ShopCategory from '../src/page/shopCategorie'
import Product from '../src/components/product/product'
import Cart from '../src/components/cart/cart'
import Admin from '../src/page/admin'
import AddProduct from '../src/components/addProduct/addProduct'
import ProductList from '../src/components/ProductList/productList'
import UserList from '../src/components/userList/userList'

function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/rental' element={<Rental />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/phones' element={<ShopCategory categorie="phones" />} />
                    <Route path='/computers' element={<ShopCategory categorie="computers" />} />
                    <Route path='/pants' element={<ShopCategory categorie="pants" />} />
                    <Route path='/headphones' element={<ShopCategory categorie="headphones" />} />
                    <Route path='/shoes' element={<ShopCategory categorie="shoes" />} />
                    <Route path='/bag' element={<ShopCategory categorie="bag" />} />
                    <Route path='/cameras' element={<ShopCategory categorie="cameras" />} />
                    <Route path='/product' element={<Product />}>
                        <Route path=':id' element={<Product />} />
                    </Route>
                    <Route path='/cart' element={<Cart />} />
                </Route>
                <Route path='/admin' element={<Admin />} />
                {/* <Route path="/sidebarForAdmin" element={<SidebarForAdmin />} /> */}
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/listproduct" element={<ProductList />} />
                <Route path="/listuser" element={<UserList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index