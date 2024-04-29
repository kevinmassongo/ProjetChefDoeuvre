import { useContext } from "react";
import ShopContext from "../context/shopContext";
import MultiplyIcon from "/src/icon/multiply.svg"

function CartItems() {
    const { all_products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext)
    return (
        <div className="cart-items">
            <div className="cart-items-format-main">
                <p>Produit</p>
                <p>Marque</p>
                <p>Modèle</p>
                <p>Prix</p>
                <p>Quantité</p>
                <p>Total</p>
                <p>Suppression</p>
            </div>
            <hr />
            {
                all_products.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return <>
                            <div className="cart-items-format cart-items-format-main" key={e.id}>
                                <img src={e.urlToImage} alt="" className="cartIcon-product-icon" />
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
                    }
                    return null
                })
            }
            <div className="cart-items-down">
                <div className="cart-items-total">
                    <h1>Totaux du panier</h1>
                    <div>
                        <div className="cartItems-total-item">
                            <p>Sous-total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <p>Frais de transport</p>
                            <p>Gratuit</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <hr />
                        {/* <button>ACHETEZ MAINTENANT</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;