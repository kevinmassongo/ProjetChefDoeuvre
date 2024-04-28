import { useContext, useState } from "react"
import PostHeadphones from "./postHeadphones"
import ShopContext from "../../context/shopContext"

function ShowHeadphones() {
    const {dataFromHeadphone} = useContext(ShopContext)
    return (
        <div className="computer-container">
            {
                dataFromHeadphone.map((headphone) =>
                    <div key={headphone.id} className="computer">
                        <PostHeadphones headphone={headphone} />
                    </div>
                )
            }
        </div>
    )
}

export default ShowHeadphones