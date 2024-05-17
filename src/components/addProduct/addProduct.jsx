import { useState } from "react";
import upload_area from "../../icon/upload_area.svg"
import NavBarForAdmin from "../navbarForAdmin/navbarForAdmin";
import { Link } from "react-router-dom";

function AddProduct() {

    const [image, setImage] = useState(false)

    const [productDetails, setProductDetails] = useState({
        marque: "",
        modele: "",
        couleur: "",
        prix: "",
        materiau: "",
        dimension: "",
        connectivite: "",
        resolution: "",
        memoire: "",
        typeProduit: "",
        stockage: "",
        taille: "",
        tailleEcran: "",
        tailleCapteur: "",
        pointure: "",
        processeur: "",
        description: "",
        image: "",
        categorie: "bag"
    })

    const changeHandler = (e) => {
        if (e.target.name === "prix") {
            setProductDetails({ ...productDetails, [e.target.name]: parseInt(e.target.value) })
        } else {
            setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
        }
    }

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const Add_Product = async () => {
        let responseData;
        let product = productDetails;

        let formData = new FormData()
        formData.append('product', image)

        await fetch('https://capstone2-c2-kevinmassongo-1.onrender.com/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => responseData = data)
        if (responseData.success) {
            product.image = responseData.image_url
            console.log(product);
            await fetch('https://capstone2-c2-kevinmassongo-1.onrender.com/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                data.success ? alert("Product Added") : alert("Failed")
            })
        }
    }


    return (
        <>
            <NavBarForAdmin />
            <div className="products">
                <Link to='/admin' className="container-back-button">
                    <div role="button" className="back-button">Retour</div>
                </Link>
                <div className="add-product">
                    <div className="add-product-container">
                        <div className="addproduct-itemfield">
                            <p>Marque du produit</p>
                            <input type="text" value={productDetails.marque} onChange={changeHandler} name="marque" placeholder="veuillez taper ici" />
                        </div>
                        <div className="addproduct-itemfield">
                            <p>Modèle du produit</p>
                            <input type="text" value={productDetails.modele} onChange={changeHandler} name="modele" placeholder="veuillez taper ici" />
                        </div>
                        <div className="addproduct-container">
                            <div className="addproduct-itemfield">
                                <p>Couleur du produit</p>
                                <input type="text" value={productDetails.couleur} onChange={changeHandler} name="couleur" placeholder="veuillez taper ici" />
                            </div>
                            <div className="addproduct-itemfield">
                                <p>Prix du produit</p>
                                <input type="text" value={productDetails.prix} onChange={changeHandler} name="prix" placeholder="veuillez taper ici" />
                            </div>
                        </div>
                        <div className="addproduct-container">
                            <div className="addproduct-itemfield">
                                <p>Matériau du produit</p>
                                <input type="text" value={productDetails.materiau} onChange={changeHandler} name="materiau" placeholder="veuillez taper ici" />
                            </div>
                            <div className="addproduct-itemfield">
                                <p>Dimension du produit</p>
                                <input type="text" value={productDetails.dimension} onChange={changeHandler} name="dimension" placeholder="veuillez taper ici" />
                            </div>
                        </div>
                        <div className="addproduct-container">
                            <div className="addproduct-itemfield">
                                <p>Connectivité du produit</p>
                                <input type="text" value={productDetails.connectivite} onChange={changeHandler} name="connectivite" placeholder="veuillez taper ici" />
                            </div>
                            <div className="addproduct-itemfield">
                                <p>Résolution du produit</p>
                                <input type="text" value={productDetails.resolution} onChange={changeHandler} name="resolution" placeholder="veuillez taper ici" />
                            </div>
                        </div>
                        <div className="addproduct-container">
                            <div className="addproduct-itemfield">
                                <p>Mémoire du produit</p>
                                <input type="text" value={productDetails.memoire} onChange={changeHandler} name="memoire" placeholder="veuillez taper ici" />
                            </div>
                            <div className="addproduct-itemfield">
                                <p>Type du produit</p>
                                <input type="text" value={productDetails.typeProduit} onChange={changeHandler} name="typeProduit" placeholder="veuillez taper ici" />
                            </div>
                        </div>
                        <div className="addproduct-container">
                            <div className="addproduct-itemfield">
                                <p>Stockage du produit</p>
                                <input type="text" value={productDetails.stockage} onChange={changeHandler} name="stockage" placeholder="veuillez taper ici" />
                            </div>
                            <div className="addproduct-itemfield">
                                <p>Taille du produit</p>
                                <input type="text" value={productDetails.taille} onChange={changeHandler} name="taille" placeholder="veuillez taper ici" />
                            </div>
                        </div>
                        <div className="addproduct-container">
                            <div className="addproduct-itemfield">
                                <p>Taille d'écran d'un produit</p>
                                <input type="text" value={productDetails.tailleEcran} onChange={changeHandler} name="tailleEcran" placeholder="veuillez taper ici" />
                            </div>
                            <div className="addproduct-itemfield">
                                <p>Taille du capteur d'un produit</p>
                                <input type="text" value={productDetails.tailleCapteur} onChange={changeHandler} name="tailleCapteur" placeholder="veuillez taper ici" />
                            </div>
                        </div>
                        <div className="addproduct-container">
                            <div className="addproduct-itemfield">
                                <p>Pointure d'un produit</p>
                                <input type="text" value={productDetails.pointure} onChange={changeHandler} name="pointure" placeholder="veuillez taper ici" />
                            </div>
                            <div className="addproduct-itemfield">
                                <p>Processeur d'un produit</p>
                                <input type="text" value={productDetails.processeur} onChange={changeHandler} name="processeur" placeholder="veuillez taper ici" />
                            </div>
                        </div>
                        <div className="addproduct-container">
                            <div className="addproduct-itemfield">
                                <p>Description d'un produit</p>
                                <input type="text" value={productDetails.description} onChange={changeHandler} name="description" placeholder="veuillez taper ici" />
                            </div>
                            <div className="addproduct-itemfield">
                                <p>Catégorie d'un produit</p>
                                <select value={productDetails.categorie} onChange={changeHandler} name="categorie" className="add-product-selector">
                                    <option value="bag">Bag</option>
                                    <option value="cameras">Cameras</option>
                                    <option value="headphones">Headphones</option>
                                    <option value="shoes">Shoes</option>
                                    <option value="pants">Pants</option>
                                    <option value="phones">Phones</option>
                                    <option value="computers">Computers</option>
                                </select>
                            </div>
                        </div>
                        <div className="addproduct-itemfield">
                            <label htmlFor="file-input">
                                <img src={image ? URL.createObjectURL(image) : upload_area} alt="" className="addproduct-img" />
                            </label>
                            <input type="file" onChange={imageHandler} name="image" id="file-input" hidden />
                        </div>
                        <button className="addproduct-btn" onClick={() => { Add_Product() }}>AJOUTER</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AddProduct;