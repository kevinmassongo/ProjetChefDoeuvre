import { Link, NavLink } from "react-router-dom"
import Title from "../../title"
import AddCart from "../../addCart"

function PostBags({ bag }) {
    return (
        <>

            <div className="item-box">
                <NavLink to={`/bag/${bag.id}`}>
                    <img src={bag.urlToImage}  alt={bag.marque} />
                </NavLink>
                <div className="item-title-price">
                    <Title style="item-marque">{bag.marque}</Title>
                    <div className="price">${bag.prix}</div>
                </div>
                <div className="item-marque-color">
                    <div>{bag.marque} : {bag.couleur}</div>
                </div>
            </div>
            <AddCart />
        </>
    )
}

export default PostBags