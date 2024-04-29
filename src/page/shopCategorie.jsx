import { useContext } from "react"
import ShopContext from "../components/context/shopContext"
import Item from "../components/item/item"

function ShopCategory(props) {
    const {all_products} = useContext(ShopContext)
    return (
        <div className="shop-container">
            {
                all_products.map((item, i) => {
                    if (props.catégorie === item.catégorie ) {
                        return <div key={item.id} className="item">
                            <Item urlToImage={item.urlToImage} catégorie={item.catégorie} id={item.id} modèle={item.modèle} prix={item.prix} couleur={item.couleur} marque={item.marque}/>
                        </div>
                    }
                })
            }
        </div>
    )
}

export default ShopCategory