import { useContext } from "react"
import ShopContext from "../components/context/shopContext"
import Item from "../components/item/item"

function ShopCategory(props) {
    const { all_products } = useContext(ShopContext)
    return (
        <div className="shop-container">
            {
                all_products.map((item) => {
                    if (props.categorie === item.categorie) {
                        return <div key={item.id} className="item">
                            <Item image={item.image} categorie={item.categorie} id={item.id} modele={item.modele} prix={item.prix} couleur={item.couleur} marque={item.marque} />
                        </div>
                    }
                })
            }
        </div>
    )
}

export default ShopCategory