// import './App.css'
// import React from 'react'
import Home from '../src/page/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rental from '../src/page/rental'
import Purchase from '../src/page/purchase'
import Register from '../src/page/register'
import Login from '../src/page/login'
import About from '../src/page/about'
import App from '../src/App'
import ShopCategory from '../src/page/shopCategorie'
import Product from '../src/components/product/product'

function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/purchase' element={<Purchase />}></Route>
                    <Route path='/rental' element={<Rental />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/phones' element={<ShopCategory catégorie="phones"/>}/>
                    <Route path='/computers' element={<ShopCategory catégorie="computers"/>}/>
                    <Route path='/pants' element={<ShopCategory catégorie="pants"/>}/>
                    <Route path='/headphones' element={<ShopCategory catégorie="headphones"/>}/>
                    <Route path='/shoes' element={<ShopCategory catégorie="shoes"/>}/>
                    <Route path='/bag' element={<ShopCategory catégorie="bag"/>}/>
                    <Route path='/cameras' element={<ShopCategory catégorie="cameras"/>}/>
                    <Route path='/product' element={<Product />}>
                        <Route path=':id' element={<Product />}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index