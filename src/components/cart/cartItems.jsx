import { useContext } from "react";
import ShopContext from "../context/shopContext";
import MultiplyIcon from "/src/icon/multiply.svg"

function CartItems({ e }) {

    const { cartItems, removeFromCart } = useContext(ShopContext)

    return (
        <>
            <div className="cart-items-format cart-items-format-main" key={e.id}>
                <img src={e.image} alt="" className="cartIcon-product-icon" />
                <div>{e.marque}</div>
                <div>{e.modèle}</div>
                <div>${e.prix}</div>
                <div className="cart-items-quantity">{cartItems[e.id]}</div>
                <div>${e.prix * cartItems[e.id]}</div>
                <div>
                    <img src={MultiplyIcon} onClick={() => removeFromCart(e.id)} alt="" className="multiply-icon" />
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartItems;