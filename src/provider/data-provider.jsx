import { useState } from "react";
import ShopContext from "../components/context/shopContext";
import receiveDataFromApi from "../data/data-arrivals/dataArrivals.json"
// import {getDefaultCart} from "../helpers/getDefaultCart"

// function getDefaultCart() {

//     let cart = {};

//     for (let i = 0; i < contextValue.length ; i++) {
//         cart[i] = 0;
//     }

//     return cart;
// }


function DataProvider({ children }) {

    const dataFromComputer = receiveDataFromApi.computers
    const dataFromPhone = receiveDataFromApi.phones
    const dataFromPant = receiveDataFromApi.pants
    const dataFromShoe = receiveDataFromApi.shoes
    const dataFromHeadphone = receiveDataFromApi.headphones
    const dataFromBag = receiveDataFromApi.bag
    const dataFromCamera = receiveDataFromApi.cameras

    const contextValue = { dataFromComputer, dataFromPhone, dataFromPant, dataFromShoe, dataFromHeadphone, dataFromBag, dataFromCamera}



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