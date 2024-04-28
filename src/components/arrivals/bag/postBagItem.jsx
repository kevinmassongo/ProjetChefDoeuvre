import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../title";
import AddCart from "../../addCart";
import BuyNow from "../../buyNow";
import ShopContext from "../../context/shopContext";

function PostBagItem() {

    // etat
    const [numberInCart, setNumberInCart] = useState(0)

    const {dataFromBag} = useContext(ShopContext)

    const data = dataFromBag

    const useparam = useParams()
    const { id } = useparam

    // comportement

    const bag = data.find((bag) => bag.id === +id)

    console.log(data);

    function handleClickAdd() {
        setNumberInCart(numberInCart + 1)
    }

    function handleClickDelete() {
        if (numberInCart > 0) {
            setNumberInCart(numberInCart - 1)
        }
    }


    if (!bag) {
        <p>L'article que vous avez demandé n'existe pas</p>
    }
    return (
        <>
            <div>
                <div className="item-container">
                    <div className="item-part-of-image">
                        <img src={bag.urlToImage} alt={bag.modèle} />
                    </div>
                    <div className="item-title-box">
                        <Title style="item-title">{bag.marque} : {bag.modèle}</Title>
                        <div className="description">{bag.description}</div>
                        <div className="bar"></div>
                        <div className="couleur">Couleur : {bag.couleur}</div>
                        <div className="bar"></div>
                        <div className="prix">Prix : ${bag.prix}</div>
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
                        Les spécifications complètes d'un {bag.marque}
                    </Title>
                    <div className="array-of-item-detail">
                        <div className="title-detail">
                            Détail du produit
                        </div>
                        <div className="content-detail">
                            <div className="detail-to-white">Marque</div>
                            <div className="detail-to-white">{bag.marque}</div>
                            <div>{bag.modèle}</div>
                            <div>Modèle</div>
                            <div className="detail-to-white">Couleur</div>
                            <div className="detail-to-white">{bag.couleur}</div>
                            <div>Prix</div>
                            <div>${bag.prix}</div>
                            <div className="detail-to-white">Matériau</div>
                            <div className="detail-to-white">{bag.matériau}</div>
                            <div>Dimension</div>
                            <div>{bag.dimensions}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostBagItem;