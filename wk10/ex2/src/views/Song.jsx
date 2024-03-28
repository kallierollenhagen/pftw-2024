import { Link, useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function Song({data}) {
    const {slug} = useParams();
    console.log("slug", slug);
    const selectedSong = data.find((song) => song.slug === slug)
    console.log(selectedSong)
    return (
        <>
         <nav>
            <Link to="/">Return Home</Link>
         </nav>
            <h1>{selectedSong.title}</h1>
            <img src={selectedSong.cover} alt={selectedSong.title} />
            <p>Artist: {selectedSong.artist}</p>
            <p>Rank: {selectedSong.rank}</p>
        </>
    )
}