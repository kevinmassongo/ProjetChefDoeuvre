import iconOfSociety from "../../icon/FamilyNaBiso.png"

function NavBarForAdmin() {
    return (
        <>
            <div className="navbarForAdmin">
                <a href="/"><img src={iconOfSociety} alt="logo de la société" className="logo" /></a>
                <div className="shopper">
                    <h1>SHOPPER</h1>
                    <p>Admin panel</p>
                </div>
                <img src="./src/images/kevins.jpg" alt="" className="admin-picture" />
            </div>
        </>
    )
}

export default NavBarForAdmin;