// import './App.css'
// import React from 'react'
import Home from '../src/page/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rental from '../src/page/rental'
import Purchase from '../src/page/purchase'
import Register from '../src/page/register'
import Login from '../src/page/login'
import About from '../src/page/about'
import NewArticle from '../src/page/newArticle'
import Computers from '../src/page/articles/computers'
import Pants from '../src/page/articles/pants'
import Shoes from '../src/page/articles/shoes'
import ShowComputers from '../src/components/arrivals/computers/showComputers'
import PostComputerItem from '../src/components/arrivals/computers/postComputerItem'
import Phones from '../src/page/articles/phones'
import ShowPhones from '../src/components/arrivals/phones/showPhones'
import PostPhoneItem from '../src/components/arrivals/phones/postPhoneItem'
import ShowPants from '../src/components/arrivals/pants/showPants'
import PostPantItem from '../src/components/arrivals/pants/postPantItem'
import ShowShoes from '../src/components/arrivals/shoes/showShoes'
import PostShoeItem from '../src/components/arrivals/shoes/postShoeItem'
import Headphones from '../src/page/articles/headPhones'
import ShowHeadphones from '../src/components/arrivals/headphones/showHeadphones'
import PostHeadphoneItem from '../src/components/arrivals/headphones/postHeadPhoneItem'
import ShowBags from '../src/components/arrivals/bag/showBags'
import PostBagItem from '../src/components/arrivals/bag/postBagItem'
import Bags from '../src/page/articles/bags'
import Cameras from '../src/page/articles/cameras'
import ShowCameras from '../src/components/arrivals/cameras/showCameras'
import PostCameraItem from '../src/components/arrivals/cameras/postCameraItem'
import App from '../src/App'
import Cart from '../src/page/articles/cart'

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
                    <Route path='/newarticle' element={<NewArticle />}></Route>
                    <Route path='/bags' element={<Bags />}>
                        <Route index element={<ShowBags />} />
                        <Route path=':id' element={<PostBagItem />} />
                    </Route>
                    <Route path='/cameras' element={<Cameras />}>
                        <Route index element={<ShowCameras />} />
                        <Route path=':id' element={<PostCameraItem />} />
                    </Route>
                    <Route path='/computers' element={<Computers />}>
                        <Route index element={<ShowComputers />} />
                        <Route path=':id' element={<PostComputerItem />} />
                    </Route>
                    <Route path='/headphones' element={<Headphones />}>
                        <Route index element={<ShowHeadphones />} />
                        <Route path=':id' element={<PostHeadphoneItem />} />
                    </Route>
                    <Route path='/pants' element={<Pants />}>
                        <Route index element={<ShowPants />} />
                        <Route path=':id' element={<PostPantItem />} />
                    </Route>
                    <Route path='/phones' element={<Phones />}>
                        <Route index element={<ShowPhones />} />
                        <Route path=':id' element={<PostPhoneItem />} />
                    </Route>
                    <Route path='/shoes' element={<Shoes />}>
                        <Route index element={<ShowShoes />} />
                        <Route path=':id' element={<PostShoeItem />} />
                    </Route>
                    <Route path='/cart' element={<Cart />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index