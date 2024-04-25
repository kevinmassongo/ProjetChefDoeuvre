import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../title";
import AddCart from "../../addCart";
import BuyNow from "../../buyNow";
import CameraContext from "../../context/cameraContext";

function PostCameraItem() {

    // etat
    const [numberInCart, setNumberInCart] = useState(0)

    const initializesData = useContext(CameraContext)

    const data = initializesData

    const useparam = useParams()
    const { id } = useparam

    // comportement

    const camera = data.find((camera) => camera.id === +id)

    console.log(data);

    function handleClickAdd() {
        setNumberInCart(numberInCart + 1)
    }

    function handleClickDelete() {
        if (numberInCart > 0) {
            setNumberInCart(numberInCart - 1)
        }
    }


    if (!camera) {
        <p>L'article que vous avez demandé n'existe pas</p>
    }
    return (
        <>
            <div>
                <div className="item-container">
                    <div className="item-part-of-image">
                        <img src={camera.urlToImage} alt={camera.marque} />
                    </div>
                    <div className="item-title-box">
                        <Title style="item-title">{camera.marque}</Title>
                        <div className="description">{camera.description}</div>
                        <div className="bar"></div>
                        <div className="couleur">Couleur : {camera.couleur}</div>
                        <div className="bar"></div>
                        <div className="prix">Prix : ${camera.prix}</div>
                        <div className="bar"></div>
                        <div className="cart">
                            <div className="deleteFromCart" onClick={handleClickDelete}>-</div>
                            <div className="numberInCart">{numberInCart}</div>
                            <div className="addCart" onClick={handleClickAdd}>+</div>
                        </div>
                        <div className="button-container">
                            <AddCart />
                            <BuyNow />
                        </div>
                    </div>
                </div>
                <div className="product-details">
                    <Title style="title-of-item-detail">
                        Les spécifications complètes d'un {camera.marque}
                    </Title>
                    <div className="array-of-item-detail">
                        <div className="title-detail">
                            Détail du produit
                        </div>
                        <div className="content-detail">
                            <div className="detail-to-white">Marque</div>
                            <div className="detail-to-white">{camera.marque}</div>
                            <div>Modèle</div>
                            <div>{camera.modèle}</div>
                            <div className="detail-to-white">Prix</div>
                            <div className="detail-to-white">${camera.prix}</div>
                            <div>Résolution</div>
                            <div>{camera.résolution}</div>
                            <div className="detail-to-white">Taille du capteur</div>
                            <div className="detail-to-white">{camera.taille_capteur}</div>
                            <div>Type</div>
                            <div>{camera.type}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCameraItem;