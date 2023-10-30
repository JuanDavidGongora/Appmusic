import { useEffect, useState } from "react"
import { PlaylistIcon, SearchIcon } from "../components/icons/Svgs"
import { axiosMusic } from "../utils/configAxios"
import TrackList from "../components/shared/TrackList";



const Home = () => {

const [tracksRecommendations, setTracksRecommendations] = useState ([]);


  useEffect(()=> {
    axiosMusic
    .get("/api/tracks/recommendations?seed_genres=reggae,rock,ska,hard-rock,heavy-metal")
    .then(({data})=> setTracksRecommendations(data.tracks))
    .catch((err)=> console.log(err))
   

  }, [])

  return ( 
  <section className=" bg-dark text-white font-urbanist 
  h-screen grid bg-[url(/images/auth-bg-mobile.png)] bg-no-repeat bg-right-bottom
  md:bg-[url(/images/auth-bg-desktop.png)] transition-all grid-rows-[auto_1fr]">

    <header className="bg-primary-dark flex justify-between p-4
    px-4 uppercase items-center">

      <h1 className="font-semibold text-lg">Gift Music</h1>

      <div className="flex gap-2">
      <button className="uppercase p-2 px-4 border border-secondary 
       rounded-full font-semibold  hover:bg-primary-light
       transition-all text-sm sm:text-base">Mi cuenta</button>
      <button className="uppercase p-2 px-4 border border-secondary 
       rounded-full font-semibold  hover:bg-primary-light
       transition-all flex items-center gap-2"> 
       <PlaylistIcon/> 
       <span className="hidden sm:inline">Grabando </span>1
       </button>
      </div>

     
    </header>

   
      <section className="py-14 px-4 overflow-y-auto">
      <main className="w-[min(520px,_100%)] mx-auto bg-primary-dark
      py-8 px-6 sm:px-14 rounded-3xl">
        <form className="bg-white/20 p-2 px-4 rounded-md
         flex gap-4 items-center">
          <button><SearchIcon/></button>
          <input  className="bg-transparent 
          flex-1" placeholder="Buscar" type="text" size={8} />
          <select className="bg-transparent outline-none" >
            <option value="">1</option>
          </select>
        </form>
        <TrackList tracks={tracksRecommendations}/>
      </main>
      </section>
    

  </section>
    
  )
}

export default Home