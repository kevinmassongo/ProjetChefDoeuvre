import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ShopContext from "../context/shopContext";
import Title from "../title";
import ProductDisplay from "./productDisplay";
import ProductDetails from "./productDetails";
import BreadCrum from "../breadcrums/breadcrum";

function Product() {

    // etat

    const { all_products } = useContext(ShopContext)

    const data = all_products

    const useparam = useParams()
    const { id } = useparam

    // comportement

    const item = data.find((item) => item.id === +id)

    console.log(data);

    if (!item) {
        <p>L'article que vous avez demandé n'existe pas</p>
    }
    return (
        <>
            <div>
                <BreadCrum item={item} />
                <div className="item-container">
                    <ProductDisplay item={item} />
                </div>
                <div className="product-details">
                    <ProductDetails item={item}/>
                </div>
            </div>
        </>
    )
}

export default Product;
