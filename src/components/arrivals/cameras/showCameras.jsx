import { useContext, useState } from "react"
import ShopContext from "../../context/shopContext"
import PostCameras from "./postCameras"

function ShowCameras() {
    const {dataFromCamera} = useContext(ShopContext)
    return (
        <div className="computer-container">
            {
                dataFromCamera.map((camera) =>
                    <div key={camera.id} className="computer">
                        <PostCameras camera={camera} />
                    </div>
                )
            }
        </div>
    )
}

export default ShowCameras