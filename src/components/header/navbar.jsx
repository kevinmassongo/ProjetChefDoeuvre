import { PurchaseAndRental } from "../../data/purchase-and-rental-link";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useContext, useState } from "react";
import SidebarOfNavbar from "./sidebarOfNavbar";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import ShopContext from "../context/shopContext";

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)

    const { getTotalCartItems } = useContext(ShopContext)

    function onSidebar() {
        setIsOpen(true)
    }

    function closeSidebar() {
        setIsOpen(false)
    }

    return (
        <>
            <div className="NavBar">
                <div className="NavBar-container">
                    <NavLink to="/"><img src="./src/icon/FamilyNaBiso.png" alt="" className="logo" /></NavLink>
                    <div className="purchase-and-rental-link">
                        {
                            PurchaseAndRental.map((link) =>
                                <NavLink to={link.to} className="purchase-and-rental-link-style" key={link.to}>{link.name}</NavLink>
                            )
                        }
                    </div>
                    <div className="group">
                        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input placeholder="Search" type="search" className="input" />
                    </div>
                    <div className="userAndcart-container">
                        <div className="user">
                            <FaRegCircleUser />
                        </div>
                        <div className="cart">
                            <NavLink to='/cart'>
                                <span><FaShoppingCart /></span>
                            </NavLink>
                            <div className="cart-count">
                                <p>{getTotalCartItems()}</p>
                            </div>
                        </div>
                        <div className="login-and-register">
                            <NavLink to="/login" className="login-and-register-style">Connexion</NavLink>
                        </div>
                    </div>

                    <FaBars className="onSidebarOfNavbar" onClick={onSidebar} />
                </div>
            </div >
            <SidebarOfNavbar closeSidebar={closeSidebar} isOpen={isOpen} />
        </>
    )
}

export default NavBar;