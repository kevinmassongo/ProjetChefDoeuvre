import NavBar from "./navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
    return (
        <>
            <NavBar />
            <ToastContainer />
        </>
    )
}

export default Header;