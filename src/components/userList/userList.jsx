import { useEffect, useState } from "react";
import NavBarForAdmin from "../navbarForAdmin/navbarForAdmin";
import { Link } from "react-router-dom";

function UserList() {

    const [allUsers, setAllUsers] = useState([])

    const fetchInfo = async () => {
        await fetch('http://localhost:8000/allusers')
            .then((res) => res.json())
            .then((data => { setAllUsers(data) }))
    }

    useEffect(() => {
        fetchInfo()
    }, [])

    return (
        <>
            <NavBarForAdmin />
            <div className="list-user-container">
                <Link to='/admin'>
                    <button className="return">Retour</button>
                </Link>
                <div className="list-user">
                    <h1>Liste de tous les produits</h1>
                    <div className="listuser-format-main">
                        <p>Nom</p>
                        <p>Email</p>
                        <p>Mot de passe</p>
                        <p>Rôle</p>
                    </div>
                    <div className="listuser-all">
                        {
                            allUsers.map((user) => {
                                return <div key={user.id} className="listuser-format-main listuser-format">
                                    <p>{user.name}</p>
                                    <p>{user.email}</p>
                                    <p>${user.password}</p>
                                    <p>{user.role}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList;