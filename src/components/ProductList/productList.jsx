import { useEffect, useState } from "react";
import MultiplyIcon from "/src/icon/multiply.svg"
import NavBarForAdmin from "../navbarForAdmin/navbarForAdmin";
import { Link } from "react-router-dom";


function ProductList() {
    const [allProducts, setAllProducts] = useState([])

    const fetchInfo = async () => {
        await fetch('http://localhost:8000/allproducts')
            .then((res) => res.json())
            .then((data => { setAllProducts(data) }))
    }

    useEffect(() => {
        fetchInfo()
    }, [])

    const remove_product = async (id) => {
        await fetch(`http://localhost:8000/removeproduct/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'Application/json',
                'Content-Type': 'Application/json',
            },
        })
        await fetchInfo()
    }
    return (
        <>
            <NavBarForAdmin />
            <div className="list-product-container">
                <Link to='/admin'>
                    <button className="return">Retour</button>
                </Link>
                <div className="list-product">
                    <h1>Liste de tous les produits</h1>
                    <div className="listproduct-format-main">
                        <p>Image</p>
                        <p>Marque</p>
                        <p>Modèle</p>
                        <p>Prix</p>
                        <p>Couleur</p>
                        <p>Mémoire</p>
                        <p>Stockage</p>
                        <p>Matériau</p>
                        <p>Dimension</p>
                        <p>Taille</p>
                        <p>Taille de l'écran</p>
                        <p>Taille du capteur</p>
                        <p>Pointure</p>
                        <p>Processeur</p>
                        <p>categorie</p>
                        <p>Suppression</p>
                    </div>
                    <div className="listproduct-all">
                        {
                            allProducts.map((product) => {
                                return <div key={product.id} className="listproduct-format-main listproduct-format">
                                    <img src={product.image} alt="" className="listproduts-product-image" />
                                    <p>{product.marque}</p>
                                    <p>{product.modele}</p>
                                    <p>${product.prix}</p>
                                    <p>{product.couleur}</p>
                                    <p>{product.memoire}</p>
                                    <p>{product.stockage}</p>
                                    <p>{product.materiau}</p>
                                    <p>{product.dimension}</p>
                                    <p>{product.taille}</p>
                                    <p>{product.tailleEcran}</p>
                                    <p>{product.tailleCapteur}</p>
                                    <p>{product.pointure}</p>
                                    <p>{product.processeur}</p>
                                    <p>{product.categorie}</p>
                                    <img onClick={() => { remove_product(product.id) }} src={MultiplyIcon} alt="" className="listproducts-remove-icon" />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList;