import styles from "./Banner.module.css";

function Banner({ imagem }) {
    return(
        <section 
            className={styles.banner}
            style={{ backgroundImage: `url('/images/banner-${imagem}.png')` }}
        >

        </section>
    );
}

export default Banner;