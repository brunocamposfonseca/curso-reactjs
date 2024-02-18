import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import image from "./logo-trans.png"

function Header() {
    return(
        <header className={styles.header}>
            <Link to="/">
                <span><img src={image} alt="Logo"/> MovieVideo</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Favorites">Favorites</Link>
                <Link to="/search">Search</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}

export default Header;