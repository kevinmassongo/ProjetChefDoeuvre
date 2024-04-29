import { NavLink } from "react-router-dom";
import Title from "../title";
import AddCart from "../addCart";

function Item(props) {
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
            <AddCart />
        </>
    )
}
export default Item;