import { useEffect, useState } from "react"
import Title from "../components/title"
import ItemForRent from "../components/item/itemForRent"

function Rental() {
    const [rentalproduct, setRentalproduct] = useState([])

    useEffect(() => {
        fetch('https://capstone2-c2-kevinmassongo-1.onrender.com/rentalproduct')
            .then((response) => response.json())
            .then((data) => setRentalproduct(data))
    }, [])
    return (
        <div className="new-collections">
            <div className="section-title-collections">
                <div className="section-box-collections">
                    <div className="div-empty"></div>
                    <Title style="title-collections">Produit en <span>location</span></Title>
                </div>
                <div></div>
            </div>
            <hr />
            <div className="collections">
                {rentalproduct.map((item) => {

                    return <div key={item.id} className="item">
                        <ItemForRent image={item.image} categorie={item.categorie} id={item.id} modele={item.modele} prix={item.prix} couleur={item.couleur} marque={item.marque} />
                    </div>
                })}
            </div>
        </div>
    )
}
export default Rental;
