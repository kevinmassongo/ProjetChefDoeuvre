import { Link, NavLink } from "react-router-dom"
import Title from "../../title"
import AddCart from "../../addCart"

function PostCameras({ camera }) {
    return (
        <>

            <div className="item-box">
                <NavLink to={`/cameras/${camera.id}`}>
                    <img src={camera.urlToImage} alt={camera.marque} />
                </NavLink>
                <div className="item-title-price">
                    <Title style="item-marque">{camera.marque}</Title>
                    <div className="price">${camera.prix}</div>
                </div>
                <div className="item-marque-color">
                    <div>{camera.marque} : {camera.couleur}</div>
                </div>
            </div>
            <AddCart />
        </>
    )
}

export default PostCameras