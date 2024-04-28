import { useContext, useState } from "react"
import PostPhones from "./postPhones"
import ShopContext from "../../context/shopContext"

function ShowPhones() {
    const {dataFromPhone} = useContext(ShopContext)

    return (
        <div className="computer-container">
            {
                dataFromPhone.map((phone) =>
                    <div key={phone.id} className="computer">
                        <PostPhones phone={phone} />
                    </div>
                )
            }
        </div>
    )
}

export default ShowPhones