import { Link, NavLink } from "react-router-dom"
import Title from "../../title"
import AddCart from "../../addCart"

function PostComputers({ computer }) {
    return (
        <>

            <div className="item-box">
                <NavLink to={`/computers/${computer.id}`}>
                    <img src={computer.urlToImage} alt={computer.modèle} />
                </NavLink>
                <div className="item-title-price">
                    <Title style="item-marque">{computer.modèle}</Title>
                    <div className="price">${computer.prix}</div>
                </div>
                <div className="item-marque-color">
                    <div>{computer.marque} : {computer.couleur}</div>
                </div>
            </div>
                <AddCart/>

        </>
    )
}

export default PostComputers