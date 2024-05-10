import Title from "../title";

function ProductDetails({ item }) {
    return (
        <>
            <Title style="title-of-item-detail">
                Les spécifications complètes d'un {item?.marque}
            </Title>
            <div className="array-of-item-detail">
                <div className="title-detail">
                    Détail du produit
                </div>
                <div className="content-detail">
                    <div className="detail-to-white">Marque</div>
                    <div className="detail-to-white">{item?.marque}</div>
                    <div>Modèle</div>
                    <div>{item?.modele}</div>
                    <div className="detail-to-white">Couleur</div>
                    <div className="detail-to-white">{item?.couleur}</div>
                    <div>Prix</div>
                    <div>${item?.prix}</div>
                    <div className="detail-to-white">Matériau</div>
                    <div className="detail-to-white">{item?.materiau}</div>
                    <div>Dimension</div>
                    <div>{item?.dimension}</div>
                    <div className="detail-to-white">Connectivité</div>
                    <div className="detail-to-white">{item?.connectivite}</div>
                    <div>Résolution</div>
                    <div>{item?.resolution}</div>
                    <div className="detail-to-white">Mémoire</div>
                    <div className="detail-to-white">{item?.memoire}</div>
                    <div>Type</div>
                    <div>{item?.typeProduit}</div>
                    <div className="detail-to-white">Stockage</div>
                    <div className="detail-to-white">{item?.stockage}</div>
                    <div>Taille</div>
                    <div>{item?.taille}</div>
                    <div className="detail-to-white">Taille d'écran</div>
                    <div className="detail-to-white">{item?.tailleEcran}</div>
                    <div>Taille du capteur</div>
                    <div>{item?.tailleCapteur}</div>
                    <div className="detail-to-white">Pointure</div>
                    <div className="detail-to-white">{item?.pointure}</div>
                    <div>Processeur</div>
                    <div>{item?.processeur}</div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;