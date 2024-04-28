import { useContext, useState } from "react"
import PostPants from "./postPants"
import ShopContext from "../../context/shopContext"

function ShowPants() {
    const {dataFromPant} = useContext(ShopContext)
    return (
        <div className="computer-container">
            {
                dataFromPant.map((pant) =>
                    <div key={pant.id} className="computer">
                        <PostPants pant={pant} />
                    </div>
                )
            }
        </div>
    )
}

export default ShowPants