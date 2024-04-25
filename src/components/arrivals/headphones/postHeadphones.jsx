import { Link, NavLink } from "react-router-dom"
import Title from "../../title"
import AddCart from "../../addCart"

function PostHeadphones({ headphone }) {
    return (
        <>

            <div className="item-box">
                <NavLink to={`/headphones/${headphone.id}`}>
                    <img src={headphone.urlToImage} alt={headphone.modèle} />
                </NavLink>
                <div className="item-title-price">
                    <Title style="item-marque">{headphone.modèle}</Title>
                    <div className="price">${headphone.prix}</div>
                </div>
                <div className="item-marque-color">
                    <div>{headphone.marque} : {headphone.couleur}</div>
                </div>
            </div>
            <AddCart />
        </>
    )
}

export default PostHeadphones