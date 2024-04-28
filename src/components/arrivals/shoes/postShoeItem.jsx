import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../title";
import AddCart from "../../addCart";
import BuyNow from "../../buyNow";
import ShopContext from "../../context/shopContext";

function PostShoeItem() {

    // etat
    const [numberInCart, setNumberInCart] = useState(0)

    const {dataFromShoe} = useContext(ShopContext)

    const data = dataFromShoe

    const useparam = useParams()
    const { id } = useparam

    // comportement

    const shoe = data.find((shoe) => shoe.id === +id)


    function handleClickAdd() {
        setNumberInCart(numberInCart + 1)
    }

    function handleClickDelete() {
        if (numberInCart > 0) {
            setNumberInCart(numberInCart - 1)
        }
    }


    if (!shoe) {
        <p>L'article que vous avez demandé n'existe pas</p>
    }
    return (
        <>
            <div>
                <div className="item-container">
                    <div className="item-part-of-image">
                        <img src={shoe.urlToImage} alt={shoe.marque} />
                    </div>
                    <div className="item-title-box">
                        <Title style="item-title">{shoe.marque}</Title>
                        <div className="description">{shoe.description}</div>
                        <div className="bar"></div>
                        <div className="couleur">Couleur : {shoe.couleur}</div>
                        <div className="bar"></div>
                        <div className="prix">Prix : ${shoe.prix}</div>
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
                        Les spécifications complètes d'un {shoe.marque}
                    </Title>
                    <div className="array-of-item-detail">
                        <div className="title-detail">
                            Détail du produit
                        </div>
                        <div className="content-detail">
                            <div className="detail-to-white">Marque</div>
                            <div className="detail-to-white">{shoe.marque}</div>
                            <div>Couleur</div>
                            <div>{shoe.couleur}</div>
                            <div className="detail-to-white">Prix</div>
                            <div className="detail-to-white">${shoe.prix}</div>
                            <div>Matériau</div>
                            <div>{shoe.matériau}</div>
                            <div className="detail-to-white">Pointure</div>
                            <div className="detail-to-white">{shoe.pointure}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostShoeItem;