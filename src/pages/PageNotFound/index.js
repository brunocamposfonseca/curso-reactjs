import Footer from "../../components/Footer";
import Header from "../../components/Header";
import logo404 from "./logo404.png"
import styles from "./PageNotFound.module.css"

function PageNotFound(){
    return(
        <>
            <Header />
            <section className={styles.pnf}>
                <img src={logo404} alt="logo 404" />
                <h1>Error 404</h1>
                <h2>Ops... Parece que não encontramos está página.</h2>
            </section>
            <Footer />
        </>
    );
}

export default PageNotFound;