import { useContext, useState } from "react"
import CameraContext from "../../context/cameraContext"
import PostCameras from "./postCameras"

function ShowCameras() {
    const initializeData = useContext(CameraContext)
    const data = initializeData
    return (
        <div className="computer-container">
            {
                data.map((camera) =>
                    <div key={camera.id} className="computer">
                        <PostCameras camera={camera} />
                    </div>
                )
            }
        </div>
    )
}

export default ShowCameras