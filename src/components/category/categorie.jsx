import Title from "../title";
import { Category } from "../../data/data-category/dataCategory";
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
                        {
                            Category.map((item) => {
                                return <div className="section-item-image" key={item.name}>
                                    <NavLink to={item.to}>
                                        <img src={item.media} alt={item.name} />
                                    </NavLink>
                                </div>
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categorie;