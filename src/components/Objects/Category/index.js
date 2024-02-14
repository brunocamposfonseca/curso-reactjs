import styles from "./Category.module.css";
import Videos from "../../../json/datab.json";

export const categories = [
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteorologia, Vegetação",
    "Geologia e Hidrografia"
  ]

export function filterCategory(id){
    return Videos.filter((video) => video.category === categories[id])
}

function Category({ nameCat, children }) {
    return(
        <section className={styles.category}>
            <h2>{nameCat}</h2>
            <section className={styles.subCategory}>
                {children}
            </section>
        </section>
    );
}

export default Category;