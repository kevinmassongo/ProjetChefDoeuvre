import Title from "../title";
import { NavLink } from "react-router-dom";
import imagePhone from '../../images/image-category/telephone.jpg'
import imageComputer from '../../images/image-category/ordinateur.jpg'
import imageCamera from '../../images/image-category/caméra.jpg'
import imageHeadPhone from '../../images/image-category/casque.jpg'
import imageBag from '../../images/image-category/sac.jpg'
import imageShoe from '../../images/image-category/basket.jpg'
import imagePant from '../../images/image-category/pantalon.jpg'


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
                                <img src={imagePhone} alt="phone" />
                            </NavLink>
                        </div>
                        <div className="section-item-image">
                            <NavLink to="/computers">
                                <img src={imageComputer} alt="computer" />
                            </NavLink>
                        </div>
                        <div className="section-item-image">
                            <NavLink to="/cameras">
                                <img src={imageCamera} alt="computer" />
                            </NavLink>
                        </div>
                        <div className="section-item-image">
                            <NavLink to="/headphones">
                                <img src={imageHeadPhone} alt="computer" />
                            </NavLink>
                        </div>
                        <div className="section-item-image">
                            <NavLink to="/bag">
                                <img src={imageBag} alt="computer" />
                            </NavLink>
                        </div>
                        <div className="section-item-image">
                            <NavLink to="/shoes">
                                <img src={imageShoe} alt="computer" />
                            </NavLink>
                        </div>
                        <div className="section-item-image">
                            <NavLink to="/pants">
                                <img src={imagePant} alt="computer" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categorie;