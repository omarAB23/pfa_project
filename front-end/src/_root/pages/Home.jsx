import Benefits from "../../components/Home-components/Benefits"
import Conducteur from "../../components/Home-components/Conducteur"
import Hero from "../../components/Home-components/Hero"
import CarpoolSearch from "../../components/Home-components/CarpoolSearch"
import Footer from "../../components/shared/Footer"
import NavBar from "../../components/shared/NavBar"



const Home = () => {
  return (
    <div className="w-screen">
      <NavBar/>
      <Hero/>
      <Benefits/>
      <CarpoolSearch/>
      <Conducteur/>
      <Footer/>
    </div>
  )
}

export default Home