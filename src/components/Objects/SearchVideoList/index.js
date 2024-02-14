import styles from "./SearchVideoList.module.css"
import VideoList from "../VideoList/index"
import { useState } from "react";

const filterVideos = (videos, search) => {
    return videos.filter((video) => 
    video.id.includes(search) || 
    video.title.includes(search) || 
    video.category.includes(search))
}

function SearchVideoList({ videos }) {

    const [ search, setSearch ] = useState("")
    const foundVideos = filterVideos(videos, search)

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
            <VideoList 
                videos={foundVideos} 
                emptyHeading={`No video found by "${search}"`}
            />
        </section>
    );
}

export default SearchVideoList;