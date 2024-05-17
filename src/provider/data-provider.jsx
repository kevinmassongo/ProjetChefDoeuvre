import { useEffect, useState } from "react";
import ShopContext from "../components/context/shopContext";
import all_products from "../data/data-arrivals/dataArrivals.json"
// import {getDefaultCart} from "../helpers/getDefaultCart"

function getDefaultCart() {

    let cart = {};

    for (let index = 0; index < 300; index++) {
        cart[index] = 0;
    }

    return cart;
}


function DataProvider({ children }) {

    const [all_products, setAll_products] = useState([]);

    const [cartItems, setCartItems] = useState(getDefaultCart())

    useEffect(() => {
        fetch('https://capstone2-c2-kevinmassongo-1.onrender.com/allproducts')
            .then((response) => response.json())
            .then((data) => setAll_products(data))

        if (localStorage.getItem('auth-token')) {
            fetch('https://capstone2-c2-kevinmassongo-1.onrender.com/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'Application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'content-Type': 'Application/json',
                },
                body: "",
            })
                .then((response) => response.json())
                .then((data) => setCartItems(data))
        }
    }, [])



    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch('https://capstone2-c2-kevinmassongo-1.onrender.com/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "itemId": itemId
                }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch('https://capstone2-c2-kevinmassongo-1.onrender.com/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "itemId": itemId
                }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += itemInfo.prix * cartItems[item]
                console.log(totalAmount);
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }


    const contextValue = { getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart }


    return (
        <>
            {/* <ComputerContext.Provider value={dataFromComputer}>
                <PhoneContext.Provider value={dataFromPhone}>
                    <PantContext.Provider value={dataFromPant}>
                        <ShoeContext.Provider value={dataFromShoe}>
                            <HeadphoneContext.Provider value={dataFromHeadphone}>
                                <BagContext.Provider value={dataFromBag}>
                                    <CameraContext.Provider value={dataFromCamera}>
                                        {children}
                                    </CameraContext.Provider>
                                </BagContext.Provider>
                            </HeadphoneContext.Provider>
                        </ShoeContext.Provider>
                    </PantContext.Provider>
                </PhoneContext.Provider>
            </ComputerContext.Provider> */}
            <ShopContext.Provider value={contextValue}>
                {children}
            </ShopContext.Provider>
        </>
    )
}

export default DataProvider