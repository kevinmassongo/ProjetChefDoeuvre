import { useContext, useState } from "react"
import ComputerContext from "../../context/computerContext"
import PostComputers from "./postComputers"

function ShowComputers() {
    const initializeData = useContext(ComputerContext)
    const data = initializeData
    return (
        <div className="computer-container">
            {
                data.map((computer) =>
                    <div key={computer.id} className="computer">
                        <PostComputers computer={computer} />
                    </div>
                )
            }
        </div>
    )
}

export default ShowComputers