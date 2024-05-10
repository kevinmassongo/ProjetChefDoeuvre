import '/src/App.css'
import SidebarForAdmin from "../components/sidebarForAdmin/sidebarForAdmin";
import NavBarForAdmin from '../components/navbarForAdmin/navbarForAdmin';

function Admin() {
    return (
        <div className="admin">
            <NavBarForAdmin />
            <SidebarForAdmin />
        </div>
    )
}
export default Admin;