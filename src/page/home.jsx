import Banner from "../components/banner/banner";
import Categorie from "../components/category/categorie";
import '../App.css'
import NewCollections from "../components/newcollection/newCollections";



function Home() {
    return (
        <>
            <Banner />
            <Categorie />
            <NewCollections />
        </>
    )
}
export default Home;