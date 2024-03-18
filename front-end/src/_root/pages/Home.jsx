import Benefits from "../../components/Home-components/Benefits"
import Conducteur from "../../components/Home-components/Conducteur"
import Hero from "../../components/Home-components/Hero"
import CarpoolSearch from "../../components/Home-components/CarpoolSearch"




const Home = () => {
  

  return (
    <div className="w-screen">
      
      <Hero/>
      <Benefits/>
      <CarpoolSearch/>
      <Conducteur/>
      
    </div>
  )
}

export default Home