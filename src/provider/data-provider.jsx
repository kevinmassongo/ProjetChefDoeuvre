import { useState } from "react";
import ShopContext from "../components/context/shopContext";
import all_products from "../data/data-arrivals/dataArrivals.json"
// import {getDefaultCart} from "../helpers/getDefaultCart"

function getDefaultCart() {

    let cart = {};

    for (let index = 0; index < all_products.length; index++) {
        cart[index] = 0;
    }

    return cart;
}


function DataProvider({ children }) {

    const [cartItems, setCartItems] = useState(getDefaultCart())


    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        console.log(cartItems);
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