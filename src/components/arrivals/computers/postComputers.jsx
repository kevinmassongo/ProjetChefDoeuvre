import { Link, NavLink } from "react-router-dom"
import Title from "../../title"
import AddCart from "../../addCart"

function PostComputers(props) {
    return (
        <>
            <div className="item-box">
                <NavLink to={`/computers/${props.id}`}>
                    <img src={props.urlToImage} alt={props.modèle} />
                </NavLink>
                <div className="item-title-price">
                    <Title style="item-marque">{props.modèle}</Title>
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

export default PostComputers