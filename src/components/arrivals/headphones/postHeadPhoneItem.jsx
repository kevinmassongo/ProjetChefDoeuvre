import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../title";
import AddCart from "../../addCart";
import BuyNow from "../../buyNow";
import ShopContext from "../../context/shopContext";

function PostHeadphoneItem() {

    // etat
    const [numberInCart, setNumberInCart] = useState(0)

    const {dataFromHeadphone} = useContext(ShopContext)

    const data = dataFromHeadphone

    const useparam = useParams()
    const { id } = useparam

    // comportement

    const headphone = data.find((headphone) => headphone.id === +id)


    function handleClickAdd() {
        setNumberInCart(numberInCart + 1)
    }

    function handleClickDelete() {
        if (numberInCart > 0) {
            setNumberInCart(numberInCart - 1)
        }
    }


    if (!headphone) {
        <p>L'article que vous avez demandé n'existe pas</p>
    }
    return (
        <>
            <div>
                <div className="item-container">
                    <div className="item-part-of-image">
                        <img src={headphone.urlToImage} alt={headphone.modèle} />
                    </div>
                    <div className="item-title-box">
                        <Title style="item-title">{headphone.marque} : {headphone.modèle}</Title>
                        <div className="description">{headphone.description}</div>
                        <div className="bar"></div>
                        <div className="couleur">Couleur : {headphone.couleur}</div>
                        <div className="bar"></div>
                        <div className="prix">Prix : ${headphone.prix}</div>
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
                        Les spécifications complètes d'un {headphone.modèle}
                    </Title>
                    <div className="array-of-item-detail">
                        <div className="title-detail">
                            Détail du produit
                        </div>
                        <div className="content-detail">
                            <div className="detail-to-white">Marque</div>
                            <div className="detail-to-white">{headphone.marque}</div>
                            <div>Modèle</div>
                            <div>{headphone.modèle}</div>
                            <div className="detail-to-white">Couleur</div>
                            <div className="detail-to-white">{headphone.couleur}</div>
                            <div>Prix</div>
                            <div>${headphone.prix}</div>
                            <div className="detail-to-white">Connectivité</div>
                            <div className="detail-to-white">{headphone.connectivité}</div>
                            <div>Type</div>
                            <div>{headphone.type}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostHeadphoneItem;