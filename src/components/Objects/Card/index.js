import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useFavoriteContext } from "../../../context/Favorites";

function Card({ id, title }) {

    const { favorite, addFavorites } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = !isFavorite ? <FaRegHeart /> : <FaHeart />

    return(
        <section className={styles.card}>
            <Link to={`/w/${id}`}>
                <img 
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                    alt="Capa"
                />
            </Link>
            <figure className={styles.iconcard} onClick={() => addFavorites({id})}>
                <span onClick={() => addFavorites({id})} className={styles.icon}>
                    {icone}    
                </span>
            </figure>
        </section>
    );
}

export default Card;