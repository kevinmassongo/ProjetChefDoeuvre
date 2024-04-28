import { useContext, useState } from "react"
import PostBags from "./postBags"
import ShopContext from "../../context/shopContext"

function ShowBags() {
    const {dataFromBag} = useContext(ShopContext)

    return (
        <div className="computer-container">
            {
                dataFromBag.map((bag) =>
                    <div key={bag.id} className="computer">
                        <PostBags bag={bag} />
                    </div>
                )
            }
        </div>
    )
}

export default ShowBags