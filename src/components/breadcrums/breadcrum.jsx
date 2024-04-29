import arrowRight from "/src/icon/arrow-right.svg"

function BreadCrum({ item }) {
    return (
        <>
            <div className="breadcrum">
                <div>
                    <span>Home</span> <img src={arrowRight} alt="" /> <span>Shop</span> <img src={arrowRight} alt="" /> <span>{item.catégorie}</span> <img src={arrowRight} alt="" /> <span>{item.marque}</span>
                </div>
            </div>
        </>
    )
}

export default BreadCrum;