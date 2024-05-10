import { useEffect, useState } from "react";
import Item from "../item/item";
import Title from "../title";

function NewCollections() {
    const [new_collections, setNew_collections] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/newcollections')
            .then((response) => response.json())
            .then((data) => setNew_collections(data))
    }, [])
    return (
        <div className="new-collections">
            <div className="section-title-collections">
                <div className="section-box-collections">
                    <div className="div-empty"></div>
                    <Title style="title-collections">Nouvelles <span>collections</span></Title>
                </div>
                <div></div>
            </div>
            <hr />
            <div className="collections">
                {new_collections.map((item) => {

                    return <div key={item.id} className="item">
                        <Item image={item.image} categorie={item.categorie} id={item.id} modele={item.modele} prix={item.prix} couleur={item.couleur} marque={item.marque} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default NewCollections;