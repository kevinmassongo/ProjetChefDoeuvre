import { useContext, useState } from "react"
import PostComputers from "./postComputers"
import ShopContext from "../../context/shopContext"

function ShowComputers() {
    const {dataFromComputer} = useContext(ShopContext)

    return (
        <div className="computer-container">
            {
                dataFromBag.map((computer) =>
                    <div key={computer.id} className="computer">
                        <PostComputers computer={computer} />
                    </div>
                )
            }
        </div>
    )
}

export default ShowComputers