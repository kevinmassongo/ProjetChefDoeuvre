import receiveDataFromApi from "../data/data-arrivals/dataArrivals.json"
export default function getDefaultCart() {

    const dataFromComputer = receiveDataFromApi.computers
    const dataFromPhone = receiveDataFromApi.phones
    const dataFromPant = receiveDataFromApi.pants
    const dataFromShoe = receiveDataFromApi.shoes
    const dataFromHeadphone = receiveDataFromApi.headphones
    const dataFromBag = receiveDataFromApi.bag
    const dataFromCamera = receiveDataFromApi.cameras
    let cart = {};

    for (let i = 0; i < dataFromBag.length || dataFromCamera.length || dataFromComputer.length || dataFromHeadphone.length || dataFromPant.length || dataFromPhone.length || dataFromShoe.length; i ++ ) {
        cart[i] = 0;
    }
    return cart;
}