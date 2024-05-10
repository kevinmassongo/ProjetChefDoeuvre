import { useContext } from "react";
import Title from "../title";
import { FaStar } from "react-icons/fa";
import ShopContext from "../context/shopContext";


function ProductDisplay({ item }) {

    const { addToCart } = useContext(ShopContext)

    return (
        <>
            <div className="item-part-of-image">
                <img src={item?.image} alt={item?.modele} />
            </div>
            <div className="item-title-box">
                <Title style="item-title">{item?.marque} : {item?.modele}</Title>
                <div className="star-icon">
                    <FaStar style={{ color: "#FFC038", fontSize: "20px" }} className="star-icon-one"/>
                    <FaStar style={{ color: "#FFC038", fontSize: "20px" }} className="star-icon-two"/>
                    <FaStar style={{ color: "#FFC038", fontSize: "20px" }} className="star-icon-three"/>
                    <FaStar style={{ color: "#FFC038", fontSize: "20px" }} className="star-icon-four"/>
                    <FaStar style={{ color: "#ffc0386e", fontSize: "20px" }} className="star-icon-five"/>
                </div>
                <div className="description">{item?.description}</div>
                <div className="bar"></div>
                <div className="couleur">Couleur : {item?.couleur}</div>
                <div className="bar"></div>
                <div className="prix">Prix : ${item?.prix}</div>
                <div className="bar"></div>
                <div role="button" className="cart-button">
                    <div className="addCart" onClick={() => addToCart(item.id)}>Ajoutez au panier</div>
                </div>
            </div>
        </>
    )
}
export default ProductDisplay;