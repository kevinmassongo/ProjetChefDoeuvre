import { Link, NavLink } from "react-router-dom";
import Title from "../title";
import iconWhatsApp from '/src/icon/whatsapp.svg'

function ItemForRent(props) {
    return (
        <div className="item-box">
            <img src={props.image} alt={props.marque} className="product-image" />
            <div className="item-title-price">
                <Title style="item-marque">{props.marque}</Title>
                <div className="price">${props.prix}</div>
            </div>
            <div className="item-marque-color">
                <div>{props.marque} : {props.couleur}</div>
            </div>
            <Link to="https://wa.me/qr/6RFWKRCSMGUKP1" className="whatsapp">
                <div className="register-social-networks-box-content">
                    <img src={iconWhatsApp} alt="" className="icon-whatsapp" />
                    <div>Ecrivez nous</div>
                </div>
            </Link>
        </div>
    )
}

export default ItemForRent;