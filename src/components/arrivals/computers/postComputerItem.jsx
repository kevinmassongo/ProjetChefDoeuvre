import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ComputerContext from "../../context/computerContext";
import Title from "../../title";
import AddCart from "../../addCart";
import BuyNow from "../../buyNow";

function PostComputerItem() {

    // etat
    const [numberInCart, setNumberInCart] = useState(0)

    const initializesData = useContext(ComputerContext)

    const data = initializesData

    const useparam = useParams()
    const { id } = useparam

    // comportement

    const computer = data.find((computer) => computer.id === +id)

    console.log(data);

    function handleClickAdd() {
        setNumberInCart(numberInCart + 1)
    }

    function handleClickDelete() {
        if (numberInCart > 0) {
            setNumberInCart(numberInCart - 1)
        }
    }


    if (!computer) {
        <p>L'article que vous avez demandé n'existe pas</p>
    }
    return (
        <>
            <div>
                <div className="item-container">
                    <div className="item-part-of-image">
                        <img src={computer.urlToImage} alt={computer.modèle} />
                    </div>
                    <div className="item-title-box">
                        <Title style="item-title">{computer.marque} : {computer.modèle}</Title>
                        <div className="description">{computer.description}</div>
                        <div className="bar"></div>
                        <div className="couleur">Couleur : {computer.couleur}</div>
                        <div className="bar"></div>
                        <div className="prix">Prix : ${computer.prix}</div>
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
                        Les spécifications complètes d'un {computer.modèle}
                    </Title>
                    <div className="array-of-item-detail">
                        <div className="title-detail">
                            Détail du produit
                        </div>
                        <div className="content-detail">
                            <div className="detail-to-white">Marque</div>
                            <div className="detail-to-white">{computer.marque}</div>
                            <div>Modèle</div>
                            <div>{computer.modèle}</div>
                            <div className="detail-to-white">Couleur</div>
                            <div className="detail-to-white">{computer.couleur}</div>
                            <div>Prix</div>
                            <div>${computer.prix}</div>
                            <div className="detail-to-white">Processeur</div>
                            <div className="detail-to-white">{computer.processeur}</div>
                            <div>Mémoire</div>
                            <div>{computer.mémoire}</div>
                            <div className="detail-to-white">Stockage</div>
                            <div className="detail-to-white">{computer.stockage}</div>
                            <div>Taille de l'écran</div>
                            <div>{computer.tailleDEcran}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostComputerItem;