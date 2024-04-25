import { useContext, useState } from "react"
import BagContext from "../../context/bagContext"
import PostBags from "./postBags"

function ShowBags() {
    const initializeData = useContext(BagContext)
    const data = initializeData
    return (
        <div className="computer-container">
            {
                data.map((bag) =>
                    <div key={bag.id} className="computer">
                        <PostBags bag={bag} />
                    </div>
                )
            }
        </div>
    )
}

export default ShowBags