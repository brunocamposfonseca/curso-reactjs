import styles from "./SearchVideoList.module.css";
import VideoList from "../VideoList/index";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const filterVideos = (videos, search) => {
    return videos.filter((video) => 
    video.id.includes(search) || 
    video.title.includes(search) || 
    video.category.includes(search))
}

function SearchVideoList({ videos }) {

    const [ search, setSearch ] = useState("")
    const foundVideos = filterVideos(videos, search)

    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 500)
    }, [] /*Array de dependencias*/ )

    function getVideo(event){
        setSearch(event.target.value)
    }

    return(
        <section className={styles.container}>
            <input 
                type="search"
                placeholder="Search for name or category"
                value={search}
                onChange={getVideo}
            />
            { 
                //Renderização condicional
                loading ? <Loader /> : 
                <VideoList 
                    videos={foundVideos} 
                    emptyHeading={`No video found by "${search}"`}
                />
            }
        </section>
    );
}

export default SearchVideoList;