import { useContext, useState } from "react"
import PostShoes from "./postShoes"
import ShoeContext from "../../context/shoeContext"

function ShowShoes() {
    const initializeData = useContext(ShoeContext)
    const data = initializeData
    return (
        <div className="computer-container">
            {
                data.map((shoe) =>
                    <div key={shoe.id} className="computer">
                        <PostShoes shoe={shoe} />
                    </div>
                )
            }
        </div>
    )
}

export default ShowShoes