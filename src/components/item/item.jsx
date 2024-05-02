import { NavLink } from "react-router-dom";
import Title from "../title";
import { useContext } from "react";
import ShopContext from "../context/shopContext";

function Item(props) {

    const { addToCart } = useContext(ShopContext)

    return (
        <>

            <div className="item-box">
                <NavLink to={`/product/${props.id}`}>
                    <img src={props.urlToImage} alt={props.marque} />
                </NavLink>
                <div className="item-title-price">
                    <Title style="item-marque">{props.marque}</Title>
                    <div className="price">${props.prix}</div>
                </div>
                <div className="item-marque-color">
                    <div>{props.marque} : {props.couleur}</div>
                </div>
            </div>
            <div role="button" className="cart-button">
                <div className="addCart" onClick={() => addToCart(props.id)}>Ajoutez au panier</div>
            </div>
        </>
    )
}
export default Item;