import { useContext, useState } from "react";
import AddCart from "../addCart";
import BuyNow from "../buyNow";
import Title from "../title";
import { FaStar } from "react-icons/fa";
import ShopContext from "../context/shopContext";


function ProductDisplay({ item }) {

    const { addToCart } = useContext(ShopContext)

    return (
        <>
            <div className="item-part-of-image">
                <img src={item?.urlToImage} alt={item?.modèle} />
            </div>
            <div className="item-title-box">
                <Title style="item-title">{item?.marque} : {item?.modèle}</Title>
                <div className="star-icon">
                    <FaStar style={{ color: "#FFC038", fontSize: "20px" }} />
                    <FaStar style={{ color: "#FFC038", fontSize: "20px" }} />
                    <FaStar style={{ color: "#FFC038", fontSize: "20px" }} />
                    <FaStar style={{ color: "#FFC038", fontSize: "20px" }} />
                    <FaStar style={{ color: "#ffc0386e", fontSize: "20px" }} />
                </div>
                <div className="description">{item?.description}</div>
                <div className="bar"></div>
                <div className="couleur">Couleur : {item?.couleur}</div>
                <div className="bar"></div>
                <div className="prix">Prix : ${item?.prix}</div>
                <div className="bar"></div>
                <button className="cart">
                    <div className="addCart" onClick={() => addToCart(item.id)}>Ajoutez au panier</div>
                </button>
            </div>
        </>
    )
}
export default ProductDisplay;