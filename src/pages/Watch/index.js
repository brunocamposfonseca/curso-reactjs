import Header from "../../components/Header";
import Footer from "../../components/Footer"
import Container from "../../components/Container"
import styles from "./Watch.module.css";
import Video from "../../json/datab.json"
import { useParams } from "react-router-dom";
import PageNotFound from "../PageNotFound";

function Watch(){
    const params = useParams()
    const video = Video.find((video) => {
        return video.id === params.id
    })
    if(!video){
        return <PageNotFound />
    }

    return(
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                    <h1>Watch Video</h1>
                    <iframe 
                        width="854" 
                        height="480" 
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                    ></iframe>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Watch;