import { Link, NavLink } from "react-router-dom"
import Title from "../../title"
import AddCart from "../../addCart"

function PostShoes({ shoe }) {
    return (
        <>

            <div className="item-box">
                <NavLink to={`/shoes/${shoe.id}`}>
                    <img src={shoe.urlToImage} alt={shoe.marque} />
                </NavLink>
                <div className="item-title-price">
                    <Title style="item-marque">{shoe.marque}</Title>
                    <div className="price">${shoe.prix}</div>
                </div>
                <div className="item-marque-color">
                    <div>{shoe.marque} : {shoe.couleur}</div>
                </div>
            </div>
            <AddCart />
        </>
    )
}

export default PostShoes