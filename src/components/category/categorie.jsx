import Title from "../title";
import { NavLink } from "react-router-dom";

function Categorie() {
    return (
        <>
            <div className="category">
                <div className="section-title-category">
                    <div className="section-box-category">
                        <div className="div-empty"></div>
                        <Title style="title-category">Découvrez nos <span>catégories</span></Title>
                    </div>
                    <div></div>
                </div>
                <div className="section-item-category">
                    <div className="section-item-box">
                        <div className="section-item-image">
                            <NavLink to="/phones">
                                <img src="src/images/image-category/telephone.jpg" alt="phone" />
                            </NavLink>
                        </div>
                        <div className="section-item-image">
                            <NavLink to="/computers">
                                <img src="src/images/image-category/ordinateur.jpg" alt="computer" />
                            </NavLink>
                        </div>
                        <div className="section-item-image">
                            <NavLink to="/cameras">
                                <img src="src/images/image-category/caméra.jpg" alt="computer" />
                            </NavLink>
                        </div>
                        <div className="section-item-image">
                            <NavLink to="/headphones">
                                <img src="src/images/image-category/casque.jpg" alt="computer" />
                            </NavLink>
                        </div>
                        <div className="section-item-image">
                            <NavLink to="/bag">
                                <img src="src/images/image-category/sac.jpg" alt="computer" />
                            </NavLink>
                        </div>
                        <div className="section-item-image">
                            <NavLink to="/shoes">
                                <img src="src/images/image-category/basket.jpg" alt="computer" />
                            </NavLink>
                        </div>
                        <div className="section-item-image">
                            <NavLink to="/pants">
                                <img src="src/images/image-category/pantalon.jpg" alt="computer" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categorie;