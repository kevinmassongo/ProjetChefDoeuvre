import { useContext, useState } from "react"
import PostShoes from "./postShoes"
import ShopContext from "../../context/shopContext"

function ShowShoes() {
    const {dataFromShoe} = useContext(ShopContext)

    return (
        <div className="computer-container">
            {
                dataFromShoe.map((shoe) =>
                    <div key={shoe.id} className="computer">
                        <PostShoes shoe={shoe} />
                    </div>
                )
            }
        </div>
    )
}

export default ShowShoes