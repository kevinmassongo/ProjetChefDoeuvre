import Title from "../components/title"

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="about">
                        <Title style="about-title">A PROPOS DE NOUS</Title>
                        <div className="about-container">
                            <div>L'entreprise FamilyNaBiso est spécialisée par la vente et la location des articles</div>
                        </div>
                    </div>
                    <div className="service">
                        <Title style="service-title">NOS SERVICES</Title>
                        <div className="service-container">
                            <div>Vente</div>
                            <div>Location</div>
                            <div>Livraison rapide</div>
                            <div>Paiement</div>
                            <div>Retour & Remboursement</div>
                        </div>
                    </div>
                    <div className="contact">
                        <Title style="contact-title">CONTACT</Title>
                        <div className="contact-container">
                            <div>Adresse : C/Lemba Q/Kimpwanza Av. Simonambi n°05 </div>
                            <div>Tél : +243 890305940</div>
                            <div>Email : familynabiso@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className="footer-payement">
                    <div className="footer-payement-container">
                        <Title style="footer-payement-title">NOS MOYENS DE PAIEMENT</Title>
                        <div className="footer-payement-img">
                            <img src="src/icon/vodacom.jpg" alt="vodacom" />
                            <img src="src/icon/orange.png" alt="orange" />
                            <img src="src/icon/airtel.png" alt="airtel" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer