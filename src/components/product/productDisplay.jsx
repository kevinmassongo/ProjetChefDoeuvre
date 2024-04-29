import { useState } from "react";
import AddCart from "../addCart";
import BuyNow from "../buyNow";
import Title from "../title";

function ProductDisplay({ item }) {
    const [numberInCart, setNumberInCart] = useState(0)

    function handleClickAdd() {
        setNumberInCart(numberInCart + 1)
    }

    function handleClickDelete() {
        if (numberInCart > 0) {
            setNumberInCart(numberInCart - 1)
        }
    }
    return (
        <>
            <div className="item-part-of-image">
                <img src={item?.urlToImage} alt={item?.modèle} />
            </div>
            <div className="item-title-box">
                <Title style="item-title">{item?.marque} : {item?.modèle}</Title>
                <div className="description">{item?.description}</div>
                <div className="bar"></div>
                <div className="couleur">Couleur : {item?.couleur}</div>
                <div className="bar"></div>
                <div className="prix">Prix : ${item?.prix}</div>
                <div className="bar"></div>
                <div className="cart">
                    <div className="deleteFromCart" onClick={handleClickDelete}>-</div>
                    <div className="numberInCart">{numberInCart}</div>
                    <div className="addCart" onClick={handleClickAdd}>+</div>
                </div>
                <div className="button-container">
                    <AddCart />
                    <BuyNow />
                </div>
            </div>
        </>
    )
}
export default ProductDisplay;