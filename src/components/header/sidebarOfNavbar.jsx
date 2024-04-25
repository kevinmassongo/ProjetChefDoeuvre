import { NavLink } from "react-router-dom";
import { DataFromSidebarOfAboveNavbar } from "../../data/data-SidebarOfAboveNavbar/sidebarOfAboveNavbar-link";
import { IoClose } from "react-icons/io5";

function SidebarOfNavbar({ isOpen, closeSidebar }) {


    return (
        <div className={`sidebar-of-navbar ${isOpen && "open"}`}>
            <div className="sidebar-of-navbar-title">
                <div></div>
                <IoClose size={30} className="closeSidebar" onClick={closeSidebar} />
            </div>
            {
                DataFromSidebarOfAboveNavbar.map((post) =>
                    <div className="sidebar-of-navbar-container" key={post.to}>
                        <NavLink to={post.to} className="link-to-navbar">{post.name}</NavLink>
                    </div>
                )
            }
        </div>
    )
}
export default SidebarOfNavbar;