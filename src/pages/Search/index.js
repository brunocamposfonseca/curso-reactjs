import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchVideoList from "../../components/Objects/SearchVideoList";
import Video from "../../json/datab.json";
import styles from "./Search.module.css";

function Search() {
    return(
        <>
            <Header />
            <Container>
                <section className={styles.search}>
                    <h2>Search</h2>
                    <SearchVideoList videos={Video}/>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Search;