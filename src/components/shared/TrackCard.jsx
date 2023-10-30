import { Link } from "react-router-dom"
import { AddIcon, PlayIcon } from "../icons/Svgs"

const TrackCard = ({track}) => {

  const lastIndexArtist = track.artist.length - 1

  return (
    <article className="flex gap-4 items-center ">

        {/*Imagen de la cancion */}
        <div className="w-[58px] h-[58px] rounded-md overflow-hidden ">
            <img src={track.album.images[2].url} alt="" />
        </div>

         {/*Detalle de la cancion */}
        <div className=" flex-1 text-sm grid gap-1">
            <h4 className="font-semibold line-clamp-1">{track.name}</h4>
            {/*<h5 className="text-slate-400 
            line-clamp-1">{track.artists[0].name}</h5>*/}
            <ul className="flex gap-2">
                {track.artists.map((artist, index) => (
                        <li key={artist.id}>
                            <Link to={`/artists/${artist.id}`}>
                                {artist.name} {lastIndexArtist !== index && "," }
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>

         {/*Botones*/}
        <div className="flex gap-2 pr-1">
            <button>
                <PlayIcon/>
            </button>
            <button>
                <AddIcon/>
            </button>
        </div>
    </article>
  )
}

export default TrackCard