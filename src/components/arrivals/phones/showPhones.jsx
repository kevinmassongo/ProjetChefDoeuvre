import { useContext, useState } from "react"
import PhoneContext from "../../context/phoneContext"
import PostPhones from "./postPhones"

function ShowPhones() {
    const initializeData = useContext(PhoneContext)
    const data = initializeData
    return (
        <div className="computer-container">
            {
                data.map((phone) =>
                    <div key={phone.id} className="computer">
                        <PostPhones phone={phone} />
                    </div>
                )
            }
        </div>
    )
}

export default ShowPhones