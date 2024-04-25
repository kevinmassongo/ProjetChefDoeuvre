import { useContext, useState } from "react"
import HeadphoneContext from "../../context/headphoneContext"
import PostHeadphones from "./postHeadphones"

function ShowHeadphones() {
    const initializeData = useContext(HeadphoneContext)
    const data = initializeData
    console.log(data);
    return (
        <div className="computer-container">
            {
                data.map((headphone) =>
                    <div key={headphone.id} className="computer">
                        <PostHeadphones headphone={headphone} />
                    </div>
                )
            }
        </div>
    )
}

export default ShowHeadphones