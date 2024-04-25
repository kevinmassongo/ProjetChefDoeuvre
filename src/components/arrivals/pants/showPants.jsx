import { useContext, useState } from "react"
import PostPants from "./postPants"
import PantContext from "../../context/pantContext"

function ShowPants() {
    const initializeData = useContext(PantContext)
    const data = initializeData
    return (
        <div className="computer-container">
            {
                data.map((pant) =>
                    <div key={pant.id} className="computer">
                        <PostPants pant={pant} />
                    </div>
                )
            }
        </div>
    )
}

export default ShowPants