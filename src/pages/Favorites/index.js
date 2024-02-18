import styles from "./Favorites.module.css"
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import VideoList from "../../components/Objects/VideoList"
import { useFavoriteContext } from "../../context/Favorites"

function Favorites() {

    const { favorite } = useFavoriteContext()

    return(
        <section>
            <Header />
            <Container>
                <section className={styles.favorite}>
                    <h2>Favorites List</h2>
                    { <VideoList videos={favorite} emptyHeading="Favoritar vídeos para aparecerem aqui!"/> }
                </section>
            </Container>
            <Footer />
        </section>
    )
}

export default Favorites;