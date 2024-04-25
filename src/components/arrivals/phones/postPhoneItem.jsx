import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../title";
import AddCart from "../../addCart";
import BuyNow from "../../buyNow";
import PhoneContext from "../../context/phoneContext";

function PostPhoneItem() {

    // etat
    const [numberInCart, setNumberInCart] = useState(0)

    const initializesData = useContext(PhoneContext)

    const data = initializesData

    const useparam = useParams()
    const { id } = useparam

    // comportement

    const phone = data.find((phone) => phone.id === +id)

    console.log(data);

    function handleClickAdd() {
        setNumberInCart(numberInCart + 1)
    }

    function handleClickDelete() {
        if (numberInCart > 0) {
            setNumberInCart(numberInCart - 1)
        }
    }


    if (!phone) {
        <p>L'article que vous avez demandé n'existe pas</p>
    }
    return (
        <>
            <div>
                <div className="item-container">
                    <div className="item-part-of-image">
                        <img src={phone.urlToImage} alt={phone.modèle} />
                    </div>
                    <div className="item-title-box">
                        <Title style="item-title">{phone.marque} : {phone.modèle}</Title>
                        <div className="description">{phone.description}</div>
                        <div className="bar"></div>
                        <div className="couleur">Couleur : {phone.couleur}</div>
                        <div className="bar"></div>
                        <div className="prix">Prix : ${phone.prix}</div>
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
                        Les spécifications complètes d'un {phone.modèle}
                    </Title>
                    <div className="array-of-item-detail">
                        <div className="title-detail">
                            Détail du produit
                        </div>
                        <div className="content-detail">
                            <div className="detail-to-white">Marque</div>
                            <div className="detail-to-white">{phone.marque}</div>
                            <div>Modèle</div>
                            <div>{phone.modèle}</div>
                            <div className="detail-to-white">Couleur</div>
                            <div className="detail-to-white">{phone.couleur}</div>
                            <div>Prix</div>
                            <div>${phone.prix}</div>
                            <div className="detail-to-white">Processeur</div>
                            <div className="detail-to-white">{phone.processeur}</div>
                            <div>Mémoire</div>
                            <div>{phone.mémoire}</div>
                            <div className="detail-to-white">Taille de l'écran</div>
                            <div className="detail-to-white">{phone.tailleDEcran}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostPhoneItem;