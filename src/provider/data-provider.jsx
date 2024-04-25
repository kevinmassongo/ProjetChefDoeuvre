import BagContext from "../components/context/bagContext";
import CameraContext from "../components/context/cameraContext";
import ComputerContext from "../components/context/computerContext";
import HeadphoneContext from "../components/context/headphoneContext";
import PantContext from "../components/context/pantContext";
import PhoneContext from "../components/context/phoneContext";
import ShoeContext from "../components/context/shoeContext";
import receiveDataFromComputer from "../data/data-arrivals/dataArrivals.json"
import receiveDataFromPhone from "../data/data-arrivals/dataArrivals.json"
import receiveDataFromPant from "../data/data-arrivals/dataArrivals.json"
import receiveDataFromShoe from "../data/data-arrivals/dataArrivals.json"
import receiveDataFromHeadphone from "../data/data-arrivals/dataArrivals.json"
import receiveDataFromBag from "../data/data-arrivals/dataArrivals.json"
import receiveDataFromCamera from "../data/data-arrivals/dataArrivals.json"

function DataProvider({ children }) {

    const dataFromComputer = receiveDataFromComputer.computers
    const dataFromPhone = receiveDataFromPhone.phones
    const dataFromPant = receiveDataFromPant.pants
    const dataFromShoe = receiveDataFromShoe.shoes
    const dataFromHeadphone = receiveDataFromHeadphone.headphones
    const dataFromBag = receiveDataFromBag.bag
    const dataFromCamera = receiveDataFromCamera.cameras

    return (
        <>
            <ComputerContext.Provider value={dataFromComputer}>
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
            </ComputerContext.Provider>
        </>
    )
}

export default DataProvider