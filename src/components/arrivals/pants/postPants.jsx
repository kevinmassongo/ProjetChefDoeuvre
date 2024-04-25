import { Link, NavLink } from "react-router-dom"
import Title from "../../title"
import AddCart from "../../addCart"

function PostPants({ pant }) {
    return (
        <>

            <div className="item-box">
                <NavLink to={`/pants/${pant.id}`}>
                    <img src={pant.urlToImage} alt={pant.marque} />
                </NavLink>
                <div className="item-title-price">
                    <Title style="item-marque">{pant.marque}</Title>
                    <div className="price">${pant.prix}</div>
                </div>
                <div className="item-marque-color">
                    <div>{pant.marque} : {pant.couleur}</div>
                </div>
            </div>
                <AddCart/>

        </>
    )
}

export default PostPants