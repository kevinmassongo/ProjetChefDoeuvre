import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../title";
import AddCart from "../../addCart";
import BuyNow from "../../buyNow";
import PantContext from "../../context/pantContext";

function PostPantItem() {

    // etat
    const [numberInCart, setNumberInCart] = useState(0)

    const initializesData = useContext(PantContext)

    const data = initializesData

    const useparam = useParams()
    const { id } = useparam

    // comportement

    const pant = data.find((pant) => pant.id === +id)

    console.log(data);

    function handleClickAdd() {
        setNumberInCart(numberInCart + 1)
    }

    function handleClickDelete() {
        if (numberInCart > 0) {
            setNumberInCart(numberInCart - 1)
        }
    }


    if (!pant) {
        <p>L'article que vous avez demandé n'existe pas</p>
    }
    return (
        <>
            <div>
                <div className="item-container">
                    <div className="item-part-of-image">
                        <img src={pant.urlToImage} alt={pant.modèle} />
                    </div>
                    <div className="item-title-box">
                        <Title style="item-title">{pant.marque} : {pant.modèle}</Title>
                        <div className="description">{pant.description}</div>
                        <div className="bar"></div>
                        <div className="couleur">Couleur : {pant.couleur}</div>
                        <div className="bar"></div>
                        <div className="prix">Prix : ${pant.prix}</div>
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
                        Les spécifications complètes d'un {pant.modèle}
                    </Title>
                    <div className="array-of-item-detail">
                        <div className="title-detail">
                            Détail du produit
                        </div>
                        <div className="content-detail">
                            <div className="detail-to-white">Marque</div>
                            <div className="detail-to-white">{pant.marque}</div>
                            <div>Matériau</div>
                            <div>{pant.matériau}</div>
                            <div className="detail-to-white">Prix</div>
                            <div className="detail-to-white">${pant.prix}</div>
                            <div>Couleur</div>
                            <div>{pant.couleur}</div>
                            <div className="detail-to-white">Taille</div>
                            <div className="detail-to-white">{pant.taille}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostPantItem;