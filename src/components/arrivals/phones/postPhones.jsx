import { Link, NavLink } from "react-router-dom"
import Title from "../../title"
import AddCart from "../../addCart"

function PostPhones({ phone }) {
    return (
        <>

            <div className="item-box">
                <NavLink to={`/phones/${phone.id}`}>
                    <img src={phone.urlToImage} alt={phone.modèle} />
                </NavLink>
                <div className="item-title-price">
                    <Title style="item-marque">{phone.modèle}</Title>
                    <div className="price">${phone.prix}</div>
                </div>
                <div className="item-marque-color">
                    <div>{phone.marque} : {phone.couleur}</div>
                </div>
            </div>
                <AddCart/>

        </>
    )
}

export default PostPhones