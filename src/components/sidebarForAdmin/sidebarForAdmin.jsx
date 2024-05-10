import Product_Cart from "/src/icon/Product_Cart.svg"
import Product_list_icon from "/src/icon/Product_list_icon.svg"

function SidebarForAdmin() {
    return (
        <div className="sidebarForAdmin">
            <a href="/listproduct" className="sidebarForAdmin-link">
                <div className="sidebarForAdmin-item">
                    <img src={Product_list_icon} alt="" />
                    <p>Liste des produits</p>
                </div>
            </a>
            <a href="/addproduct" className="sidebarForAdmin-link">
                <div className="sidebarForAdmin-item">
                    <img src={Product_Cart} alt="" />
                    <p>Ajouter un produit</p>
                </div>
            </a>
            <a href="/listuser" className="sidebarForAdmin-link">
                <div className="sidebarForAdmin-item">
                    <img src={Product_list_icon} alt="" />
                    <p>Liste des utilisateurs</p>
                </div>
            </a>
        </div>
    )
}

export default SidebarForAdmin;