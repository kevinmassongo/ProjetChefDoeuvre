import { useContext } from "react";
import ShopContext from "../context/shopContext";
import CartItems from "./cartItems";

function Cart () {
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
                        return <CartItems e={e} key={e.id} />
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
                        <div role="button" className="buy-now">ACHETEZ MAINTENANT</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;